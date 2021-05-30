import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../services/programs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private programsService: ProgramsService) { }

  ngOnInit(): void {
  }

  update_packages_list(){
    this.programsService.update_packages_list().subscribe( res => {
      if ("ok" == res){
        window.open('http://localhost:8080', "_blank");
      }
    });    
  }
}
