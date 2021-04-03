import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../common/models/employee.interface';
import { SearchListRequest } from './models/search-list-request';
import { SearchListResponse } from './models/search-list-response.interface';
import { RequestBuilder } from './request-builder';

const apiController = 'Employees';

@Injectable({
    providedIn: 'root'
})
export class EmployeesDataService {

    constructor(private readonly builder: RequestBuilder) { }

    public getEmployersList(request: SearchListRequest): Observable<SearchListResponse<Employee>> {
        return this.builder.useApiUrl(`${apiController}/searchedList`).post<SearchListResponse<Employee>>(request);
    }

    public getEmloyeeById(id: number): Observable<Employee> {
        return this.builder.useApiUrl(`${apiController}/${id}`).get<Employee>();
    }

    public updateEmployee(employee: Employee) {
        return this.builder.useApiUrl(apiController).put(employee);
    }
}
