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
    this.programsService.get_programs(name).subscribe( pack =>{
      this.displayList.push(pack);
    });    
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
      packages.forEach(p => {
          console.log("llamando a la carpeta "+ this.folder +" con el paquete "+ p.name);
          this.programsService.add_packages(p, this.folder);
      });
    } else {    
      
      /*packages.forEach(p => {
        this.programsService.add_packages(p, 'asdf');
      });*/
      
      this.control = true;
      this.programsService.get_folder().subscribe(
        folder => {
          this.folder = folder;
          packages.forEach(p => {
            console.log("llamando a la carpeta "+ folder +" con el paquete "+ p.name);
            this.programsService.add_packages(p, folder);
          });
        }
      );
    }        
  }
}
