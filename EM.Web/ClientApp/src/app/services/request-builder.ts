import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export class RequestClientBuilder {
    private readonly defaultHeaders = { ['api-call']: 'true', ['noauth-call']: 'true' };


    public constructor(private readonly http: HttpClient, private readonly url: string) {}

    public get<T>(params?: { [param: string]: string | string[] }): Observable<T> {
        return this.http
            .get<T>(this.url, {
                params
            });
    }

    public post<T>(data: unknown): Observable<T> {
        return this.http
            .post<T>(this.url, data);
    }

    public put<T>(data: unknown): Observable<T> {
        return this.http
            .put<T>(this.url, data);
    }

    public delete<T>(params?: { [param: string]: string | string[] }): Observable<T> {
        return this.http
            .delete<T>(this.url, {
                params,
            });
    }
}

@Injectable({
    providedIn: 'root'
  })
export class RequestBuilder {
    public constructor(private client: HttpClient) {}

    public useApiUrl(endPointUrl: string): RequestClientBuilder {
        return new RequestClientBuilder(this.client, `${environment.api}/${endPointUrl}`);
    }
}