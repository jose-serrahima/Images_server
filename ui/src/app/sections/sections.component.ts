import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { Section } from '../interfaces/section';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  public sections:Section[]=[];
  @Output() eventSelectSection = new EventEmitter<String>();
  @Output() eventUnSelectSection = new EventEmitter<String>();

  constructor(private programsService: ProgramsService) { }

  ngOnInit() {
    this.getFilters(); 
  }

  getFilters():void{
    this.programsService.get_sections()
      .subscribe(sections => {
        sections.sort((a,b) => a.name.localeCompare(b.name));
        this.sections = sections
      });        
  }

  select_section(e:any, sectionName: String):void{
    if (e.target.checked) {
      this.eventSelectSection.emit(sectionName);
    } else {
      this.eventUnSelectSection.emit(sectionName);
    }
  }

}
