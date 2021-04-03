import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatNode } from './models/flat-node.interface';
import { Folder } from './models/folder.interface';

const TreeData: Folder[] = [
	{
		name: 'Files',
		childrens: [
			{ name: 'Kiryl_CV.pdf' },
			{ name: 'Dig.pdf' },
			{ name: 'Always_Jive.pdf' },
		]
	},
	{
		name: 'Sorted Files',
		childrens: [
		{
			name: 'Work',
			childrens: [
			{ name: 'Kiryl_CV.pdf' },
		]},
		{
        name: 'For Fun',
        childrens: [
			{ name: 'Dig.pdf' },
			{ name: 'Always_Jive.pdf' },
        ]
      },
    ]
  },
];

@Component({
  selector: 'em-files-tree',
  templateUrl: './files-tree.component.html',
  styleUrls: ['./files-tree.component.scss']
})
export class FilesTreeComponent {
	private _transformer = (node: Folder, level: number) => {
		return {
			expandable: !!node.childrens && node.childrens.length > 0,
			name: node.name,
			level: level,
		};
	}
	
	treeControl = new FlatTreeControl<FlatNode>(
		node => node.level, node => node.expandable);
	
	treeFlattener = new MatTreeFlattener(
		this._transformer, node => node.level, node => node.expandable, node => node.childrens);
	
	dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
	
	constructor() {
		this.dataSource.data = TreeData;
	}
	
	hasChild = (_: number, node: FlatNode) => node.expandable;

	fileClick(fileName: string) {
		
	}
}
