import { CollectionViewer, DataSource } from "@angular/cdk/collections";

import { Employee } from "../common/models/employee.interface";
import { EmployeesDataService } from "../services/employees-data.service";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize, map } from "rxjs/operators";
import { ChangeDetectorRef } from "@angular/core";
import { SearchListRequest } from "../services/models/search-list-request";

export class EmployeeSource extends DataSource<Employee> {

    private employeesSubject = new BehaviorSubject<Employee[]>([]);
    private employeesCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public employees$ = this.employeesSubject.asObservable();
    public count$ = this.employeesCountSubject.asObservable();
    public isEmpty$ = this.count$.pipe(map(x => x < 1));

    public get count() {
        return this.employeesCountSubject.value;
    }

    public set Employees(employees: Employee[]) {
        this.employeesSubject.next(employees);
    }

    constructor(
        private employeeService: EmployeesDataService,
        private cdr: ChangeDetectorRef,
        ) {
            super();
        }

    connect(collectionViewer: CollectionViewer): Observable<Employee[]> {
        return this.employeesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.employeesSubject.complete();
        this.loadingSubject.complete();
    }

    loadEmployees(request: SearchListRequest) {
        this.loadingSubject.next(true);

        this.employeeService.getEmployersList(request)
            .pipe(
                catchError(() => of(undefined)),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(data => {
                if(data){
                    this.employeesCountSubject.next(data.count);
                    this.employeesSubject.next(data.collection);
                }

                this.cdr.markForCheck();
            });
    }
}