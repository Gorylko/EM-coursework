import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { EmployeeSource } from '../../data/employee-source';
import { PageSidebarStateService } from '../../data/page-sidebar-state.service';
import { EmployeesDataService } from '../../services/employees-data.service';
import { SearchListRequest } from '../../services/models/search-list-request';

@Component({
	selector: 'em-employees-list',
	templateUrl: './employees-list.component.html',
	styleUrls: ['./employees-list.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class EmployeesListComponent implements OnInit, AfterViewInit {
	public pageTitle: string = 'Employeer';

	public dataSource: EmployeeSource;
	public displayedColumns: string[] = ['name', 'surname', 'edit'];
	public count: number = 0;

	constructor(
		private readonly employeesDataService: EmployeesDataService,
		private pageSidebarStateService: PageSidebarStateService,
		private cdr: ChangeDetectorRef,
	) { }

	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngOnInit() {
		this.dataSource = new EmployeeSource(this.employeesDataService, this.cdr);

		this.dataSource.loadEmployees({
			searchValue: '',
			pageIndex: 0,
			pageSize: 5
		} as SearchListRequest);

		this.pageSidebarStateService.title = this.pageTitle;
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
			pageIndex: this.paginator.pageIndex,
			pageSize: this.paginator.pageSize 
		} as SearchListRequest);
    }
}
