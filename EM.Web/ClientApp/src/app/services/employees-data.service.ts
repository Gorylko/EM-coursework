import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../common/models/employee.interface';
import { EmployeesListRequest } from './models/employees-list-request';
import { RequestBuilder } from './request-builder';

const apiController = 'Employees';

@Injectable({
    providedIn: 'root'
})
export class EmployeesDataService {

    constructor(private readonly builder: RequestBuilder) { }

    public getEmployersList(request: EmployeesListRequest): Observable<Employee[]> {
        return this.builder.useApiUrl(apiController).post<Employee[]>(request);
    }

    public getEmloyeeById(id: number): Observable<Employee> {
        return this.builder.useApiUrl(`${apiController}/${id}`).get<Employee>();
    }
}
