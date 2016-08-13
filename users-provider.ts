import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../../models/user';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersProvider {

	users: any = null;

  constructor(private http: Http) {}


  load() {

  	if(this.users) {

  		return new Promise<Array<User>>(resolve => {
  			resolve(this.users);
  		});

  	} 

  	return new Promise<Array<User>>(resolve => {
  		this.http.get('https://api.github.com/users')
  		.map(res => <Array<User>>(res.json()))
  		.subscribe(users => {

  			this.users = users;
  			resolve(this.users);

  		});

  	});

  		

  }

  loadUser(login: string) {

  	return new Promise<User>(resolve => {

  		this.http.get(`https://api.github.com/users/${login}`)
  		.map(res => <User>(res.json()))
  		.subscribe(user => resolve(user));
  	});

  }

  searchByParam(searchParam: string) {

  	return new Promise<Array<User>>(resolve => {

  		this.http.get(`https://api.github.com/search/users?q=${searchParam}`)
  		.map(res => res.json())
  		.map(data => data.items)
  		.subscribe(users => resolve(users));
  	});

  }



}

