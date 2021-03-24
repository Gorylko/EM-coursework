import { Component, OnInit } from '@angular/core';
import { Employee } from '../common/models/employee.interface';
import { EmployeesDataService } from '../services/employees-data.service';

@Component({
	selector: 'app-employees-list',
	templateUrl: './employees-list.component.html',
	styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
	public employees: Employee[]

	constructor(private readonly employeesDataService: EmployeesDataService) { }

	ngOnInit() {
		this.employeesDataService.getEmployersList()
			.subscribe(employees => this.employees = employees);
	}

}
