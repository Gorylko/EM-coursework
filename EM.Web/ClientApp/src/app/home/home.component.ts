import { Component } from '@angular/core';
import { PageSidebarStateService } from '../data/page-sidebar-state.service';

@Component({
	selector: 'em-home',
	templateUrl: './home.component.html',
})
export class HomeComponent {
	constructor(
		private pageSidebarStateService: PageSidebarStateService,
	) {
		pageSidebarStateService.title = 'Home';
	}
}
