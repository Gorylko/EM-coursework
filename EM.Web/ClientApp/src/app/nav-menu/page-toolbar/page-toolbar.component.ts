import { Component, Input, OnInit } from '@angular/core';
import { PageSidebarStateService } from 'src/app/data/page-sidebar-state.service';

@Component({
	selector: 'em-page-toolbar',
	templateUrl: './page-toolbar.component.html',
	styleUrls: ['./page-toolbar.component.scss']
})
export class PageToolbarComponent implements OnInit {
	@Input() public sidenav: any;

	constructor(
		public pageSidebarStateService: PageSidebarStateService,
	) { }

	ngOnInit(): void {
	}

}
