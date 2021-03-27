import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { EmployeeSource } from '../data/employee-source';
import { EmployeesDataService } from '../services/employees-data.service';
import { EmployeesListRequest } from '../services/models/employees-list-request';

@Component({
	selector: 'em-employees-list',
	templateUrl: './employees-list.component.html',
	styleUrls: ['./employees-list.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class EmployeesListComponent implements OnInit, AfterViewInit {
	public dataSource: EmployeeSource;
	public displayedColumns: string[] = ['name', 'surname'];

	constructor(
		private readonly employeesDataService: EmployeesDataService,
		private cdr: ChangeDetectorRef,
	) { }

	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngOnInit() {
		this.dataSource = new EmployeeSource(this.employeesDataService);
		this.dataSource.loadEmployees({
			searchValue: '',
			pageIngex: 0,
			pageSize: 3
		} as EmployeesListRequest);
	}
	
    ngAfterViewInit() {
        this.paginator.page
            .pipe(
                tap(() => this.loadEmployeesPage())
            )
            .subscribe();
    }

    loadEmployeesPage() {
        this.dataSource.loadEmployees({
			searchValue: 'asc',
			pageIngex: this.paginator.pageIndex,
			pageSize: this.paginator.pageSize 
		} as EmployeesListRequest);
    }

}
