import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Package } from '../interfaces/package'
import { Section } from '../interfaces/section';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable({
  providedIn: 'root'
})

export class ProgramsService {
  private url ='http://192.168.43.39:3000/';
  
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
    return this.http.put<Package>(this.url + 'folder/' + folder , pack, httpOptions).subscribe();
  }

  execute(folder: String, type:String): Observable<String>{
    return this.http.put<string>(this.url + 'execute/'+folder+'/type/'+type, '', httpOptions);
  }

  update_packages_list(): Observable<String>{
    return this.http.put<string>(this.url + 'execute_update', '', httpOptions);
  }
}
