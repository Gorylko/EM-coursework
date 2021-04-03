import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { PageSidebarStateService } from 'src/app/data/page-sidebar-state.service';
import { Employee } from '../../common/models/employee.interface';
import { EmployeesDataService } from '../../services/employees-data.service';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
    public employee: Employee = {} as Employee;
    public form: FormGroup;
    public formMessage: string = '';

    constructor(
        private route: ActivatedRoute,
        private employeesService: EmployeesDataService,
        private pageSidebarStateService: PageSidebarStateService,
    ) {
        pageSidebarStateService.title = 'Details';
    }

    ngOnInit(): void {
        this.initFormGroup();

        this.initEmployee();
    }

    initEmployee(): void {
        const id = +this.route.snapshot.paramMap.get('id');

        this.employeesService.getEmloyeeById(id)
            .pipe(tap(user => this.form.patchValue(user)))
            .subscribe(data => {
                this.employee = data;
            });
    }

    initFormGroup(): void {
        this.form = new FormGroup({
            name: new FormControl(
                this.employee.name,
                [Validators.required],
                null
            ),
            surname: new FormControl(this.employee.surname),
            salary: new FormControl(this.employee.salary),
        });

        this.form.valueChanges.subscribe(() => this.formMessage = '');
    }

    onSubmit(): void {
        this.employeesService.updateEmployee({
                ...this.form.value,
                id: this.employee.id,
                isArchived: this.employee.isArchived,
            } as Employee
        ).subscribe(() => this.formMessage='updated');
    }
}
