import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Package } from '../package'
import { Section } from '../section';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable({
  providedIn: 'root'
})

export class ProgramsService {
  private url ='http://localhost:3000/';
  
  constructor(private http: HttpClient) { }
  
  get_sections(): Observable<Section[]>{
    return this.http.get<Section[]>(this.url + "sections");
  }

  get_programs(section:String): Observable<Package>{
    section = section.replace(' ', '_').toLocaleLowerCase();
    return this.http.get<Package>(this.url + "package_list/"+section);
  }

  get_folder(): Observable<String>{
    return this.http.get<String>(this.url+'folder');
  }

  add_packages(pack: Package, folder: String) {
    console.log("llamo al servicio");
    console.log(this.url + 'folder/' + folder);
    //return this.http.post<Package>(this.url + 'folder/' + folder , JSON.stringify(pack), httpOptions);
    return this.http.put<Package>(this.url + 'folder/' + folder , pack, httpOptions).subscribe(
      val => {
        console.log("respuesta " +val);
      },
      response => {
          console.log("PUT call in error", response);
      }
      /*() => {
          console.log("The PUT observable is now completed.");
      }*/
    );
  }
}