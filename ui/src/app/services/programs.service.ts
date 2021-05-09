import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Program } from '../program';
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

  add_packages(pack: Package[], folder: String) {
    pack.forEach(p => {
      console.log ("llamando al servicio con p= " + p.name)
      this.http.post<Package>(this.url + 'folder/' + folder , p, httpOptions)
    });    
  }
}