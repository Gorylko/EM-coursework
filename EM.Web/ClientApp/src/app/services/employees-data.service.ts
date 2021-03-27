import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../common/models/employee.interface';
import { RequestBuilder } from './request-builder';

const apiController = 'Employees';

@Injectable({
    providedIn: 'root'
})
export class EmployeesDataService {

    constructor(private readonly builder: RequestBuilder) { }

    public getEmployersList(): Observable<Employee[]> {
        return this.builder.useApiUrl(apiController).get<Employee[]>();
    }

    public getEmloyeeById(id: number): Observable<Employee> {
        return this.builder.useApiUrl(`${apiController}/${id}`).get<Employee>();
    }
}
