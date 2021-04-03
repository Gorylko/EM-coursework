import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatNode } from './models/flat-node.interface';
import { Folder } from './models/folder.interface';

const TreeData: Folder[] = [
	{
		name: 'Fruit',
		childrens: [
			{ name: 'Apple' },
			{ name: 'Banana' },
			{ name: 'Fruit loops' },
		]
	},
	{
		name: 'Vegetables',
		childrens: [
		{
			name: 'Green',
			childrens: [
			{ name: 'Broccoli' },
			{ name: 'Brussels sprouts' },
		]},
		{
        name: 'Orange',
        childrens: [
			{ name: 'Pumpkins' },
			{ name: 'Carrots' },
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
}
