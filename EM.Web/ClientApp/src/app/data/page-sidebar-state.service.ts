import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class PageSidebarStateService {
    private titleSubject = new BehaviorSubject<string>('');

    public title$ = this.titleSubject.asObservable();

    public set title(title: string) {
        this.titleSubject.next(title);
    }

    public get title() {
        return this.titleSubject.value;
    }
}