import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Employee } from 'src/app/common/models/employee.interface';
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
	private subscription: Subscription;

	public pageTitle: string = 'Employeer';

	public dataSourceElements: Employee[] = [];
	public searchForm: FormGroup;
	public dataSource: EmployeeSource;
	public dataSubject = new BehaviorSubject<Employee[]>([]);
	public displayedColumns: string[] = ['name', 'surname', 'edit'];
	public count: number = 0;

	constructor(
		private readonly employeesDataService: EmployeesDataService,
		private pageSidebarStateService: PageSidebarStateService,
		private cdr: ChangeDetectorRef,
	) {
	}

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	ngOnInit(): void {
		this.initControls();

		this.dataSource = new EmployeeSource(this.employeesDataService, this.cdr);

		this.dataSource.loadEmployees({
			searchValue: '',
			pageIndex: 0,
			pageSize: 5
		} as SearchListRequest);

		this.pageSidebarStateService.title = this.pageTitle;

		this.subscription = this.dataSource.employees$.subscribe(
            (dataMap) => {
				this.dataSourceElements = [];
                Object.entries(dataMap).forEach(
                    ([key, value]) => {
                        const newElement: Employee = {
							id: value.id,
                            name: value.name,
                            surname: value.surname,
                            salary: value.salary,
							isArchived: value.isArchived
                        };

                        this.dataSourceElements.push(newElement);
                    }
                );
            });
	}

	onSortData(sort: Sort) {
        let data = this.dataSourceElements.slice();
        if (sort.active && sort.direction !== '') {
            data = data.sort((a: Employee, b: Employee) => {
                const isAsc = sort.direction === 'asc';
                switch (sort.active) {
                    case 'name': return this.compare(a.name, b.name, isAsc);
                    case 'surname': return this.compare(a.surname, b.surname, isAsc);
                    case 'salary': return this.compare(a.salary, b.salary, isAsc);
                    default: return 0;
                }
            });
        }

		this.dataSource.Employees = data;
    }

	private compare(a: string | number, b: string | number, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
	
    ngAfterViewInit(): void {
        this.paginator.page
            .pipe(
                tap(() => this.loadEmployeesPage())
            )
            .subscribe();
    }

    loadEmployeesPage(): void {
        this.dataSource.loadEmployees({
			searchValue: this.searchForm?.controls?.search?.value,
			pageIndex: this.paginator.pageIndex,
			pageSize: this.paginator.pageSize 
		} as SearchListRequest);
    }

	initControls(): void {
		this.searchForm = new FormGroup({
			search: new FormControl(''),
		});

		this.searchForm.controls.search.valueChanges.subscribe((a) => this.loadEmployeesPage());
	}
}
