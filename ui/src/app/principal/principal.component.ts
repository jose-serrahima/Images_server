import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { Package } from '../package';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private programsService: ProgramsService) { }

  searchText = '';  
  @Input() displayList: Package[] = [];
  @Output() eventAddPrograms = new EventEmitter<Package[]>();

  ngOnInit() {}

  select_program(e:any, name: String):void{
    if (e.target.checked) {
      //this.eventSelectFilter.emit(filterName);
      //console.log("Programa seleccinado: " + name);
    } else {
      //this.eventUnSelectFilter.emit(filterName);
      //console.log("Programa deseleccinado: " + name);
    }
  }

  add():void{
    this.eventAddPrograms.emit(this.displayList)
  }

}