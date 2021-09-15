import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Package } from '../interfaces/package';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  searchText = '';  
  @Input() displayList: Package[] = [];
  @Output() eventAddPrograms = new EventEmitter<Package[]>();

  ngOnInit() {}

  add():void{
    this.eventAddPrograms.emit(this.displayList)
  }

}