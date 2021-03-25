import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../common/models/employee.interface';

@Component({
    selector: 'em-employees-list-item',
    templateUrl: './employees-list-item.component.html',
    styleUrls: ['./employees-list-item.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class EmployeesListItemComponent implements OnInit {
    @Input() public employee: Employee;

    constructor() { }

    ngOnInit() {
    }
}
