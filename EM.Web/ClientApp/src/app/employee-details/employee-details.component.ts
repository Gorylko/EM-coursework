import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    public form: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private employeesService: EmployeesDataService
    ) { }

    ngOnInit(): void {
        this.initEmployee();
        this.initFormGroup();
    }

    initEmployee(): void {
        const id = +this.route.snapshot.paramMap.get('id');

        this.employeesService.getEmloyeeById(id)
            .subscribe(data => this.employee = data);
    }

    initFormGroup(): void {
        this.form = new FormGroup({
            name: new FormControl(''),
            surname: new FormControl(''),
        });
    }
}