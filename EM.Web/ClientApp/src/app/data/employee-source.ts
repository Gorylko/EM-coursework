import { CollectionViewer, DataSource } from "@angular/cdk/collections";

import { Employee } from "../common/models/employee.interface";
import { EmployeesDataService } from "../services/employees-data.service";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { EmployeesListRequest } from "../services/models/employees-list-request";

export class EmployeeSource implements DataSource<Employee> {

    private employeesSubject = new BehaviorSubject<Employee[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private employeeService: EmployeesDataService) {}

    connect(collectionViewer: CollectionViewer): Observable<Employee[]> {
        return this.employeesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.employeesSubject.complete();
        this.loadingSubject.complete();
    }

    loadEmployees(request: EmployeesListRequest) {
        this.loadingSubject.next(true);

        this.employeeService.getEmployersList(request)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(employees => this.employeesSubject.next(employees));
    }    
}