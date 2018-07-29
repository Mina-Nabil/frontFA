import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../../resources/users.service';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public failed: boolean = false;

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private _usersService: UsersService, private zone:NgZone) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
    let userName = this.form.controls['uname'].value
    let passWord = this.form.controls['password'].value
    let credentials: any = {
      uname: userName,
      password: passWord
    }
    let response : any = {};
    this._usersService.getLoginToken(credentials).subscribe(data => {
      response = data;
      console.log(response)
      if(!response.token){
        console.log('failed')
        this.declareFailed();
      } else {
        localStorage.setItem('token', response.token);
        console.log('saved');
        this.zone.run(() => {
          this.router.navigate([''])
        });
      }
    })
  }

  declareFailed(){
    this.failed = true;
  }

}
