import { Component,OnInit} from '@angular/core';

import { ProgramsService } from './services/programs.service';

import { Program } from './program';
import { Package } from './package';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'ui';
  public programs: Program[]=[];
  constructor(private programsService: ProgramsService) { }
  
  displayList: Package[] = [];
  packageList: String[] = [];
  control: boolean= false;
  folder: String='';

  ngOnInit() { }

  selectSection(name: String){
    if (this.control) {
      console.log("Se ha grabado anteriormente algo")
    } else {
      this.programsService.get_programs(name).subscribe( pack =>{
        this.displayList.push(pack);
      });
    }
    
  }

  unSelectSection(name: String){
    this.displayList.forEach((element, index) => {
      if (element.name == name) {
        this.displayList.splice(index,1);
      }
    });
  }

  addPrograms(packages: Package[]){
    if (this.control) {
      this.programsService.add_packages(packages, this.folder);
    } else {      
      this.control = true;
      this.programsService.get_folder().subscribe(
        folder => {
          console.log("la carpeta :" + folder );
          console.log(packages)
          this.programsService.add_packages(packages, folder);
          this.folder = folder;
        }
      );
    }        
  }
}
