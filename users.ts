import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserDetailsPage } from '../user-details/user-details'
import { User } from '../../models/user';
import { UsersProvider } from '../../providers/users-provider/users-provider'

/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',
  providers: [UsersProvider]
})
export class UsersPage {

  users: Array<User>;

  title: string;

  constructor(private navCtrl: NavController, private usersProvider: UsersProvider) {

  	this.title = "List of users";
  	this.users = [];
  	this.getAllUsers();
  }


  goToUser(event, user) {

  	this.navCtrl.push(UserDetailsPage, {
  		login: user.login
  	});
  }

  getAllUsers() {
  	console.log('Getting all users ...')
  	this.usersProvider.load()
  	.then(users => this.users = users);
  }


  getBySearchValue(searchValue: string) {
  	console.log('Searching by value ...')
  	this.usersProvider.searchByParam(searchValue)
  	.then(users => this.users = users);
  }

  search(searchTerm) {
  	event.preventDefault();
  	let searchValue = searchTerm.target.value || '';
  	if(searchValue.trim() == '' || searchValue.trim().length < 3) {
  		this.getAllUsers();
  	} else {
  		this.getBySearchValue(searchValue);
  	}

  	
  }

}
