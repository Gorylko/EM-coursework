import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../common/models/employee.interface';
import { EmployeesDataService } from '../services/employees-data.service';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
    public employee: Employee;

    constructor(
        private route: ActivatedRoute,
        private employeesService: EmployeesDataService
    ) { }

    ngOnInit(): void {
        this.initEmployee();
    }

    initEmployee(): void {
        const id = +this.route.snapshot.paramMap.get('id');

        this.employeesService.getEmloyeeById(id)
            .subscribe(data => this.employee = data);
    }

}
