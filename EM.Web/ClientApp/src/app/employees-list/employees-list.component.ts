import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../common/models/employee.interface';
import { EmployeesDataService } from '../services/employees-data.service';

@Component({
	selector: 'em-employees-list',
	templateUrl: './employees-list.component.html',
	styleUrls: ['./employees-list.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class EmployeesListComponent implements OnInit {
	public employees: Employee[]

	constructor(private readonly employeesDataService: EmployeesDataService) { }

	ngOnInit() {
		this.employeesDataService.getEmployersList()
			.subscribe(employees => this.employees = employees);
	}

}
