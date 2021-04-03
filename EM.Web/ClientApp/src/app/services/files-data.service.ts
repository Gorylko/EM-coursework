import { Injectable } from "@angular/core";
import { RequestBuilder } from "./request-builder";

@Injectable({
    providedIn: 'root'
})
export class FilesDataService {
    constructor(private readonly builder: RequestBuilder) { }
}