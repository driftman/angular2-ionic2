import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { UsersProvider } from '../../providers/users-provider/users-provider';

/*
  Generated class for the UserDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/user-details/user-details.html',
  providers: [UsersProvider]
})
export class UserDetailsPage {

  
  login: string;
  user: User = new User;

  constructor(private navCtrl: NavController, private navParams: NavParams, usersProvider: UsersProvider) {

  	this.login = navParams.get('login') || '';

  	usersProvider.loadUser(this.login)
  	.then(user => this.user = <User>user);


  }

}
