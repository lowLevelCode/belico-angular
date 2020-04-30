import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.services';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  returnUrl: string;

  constructor(private readonly formBuilder: FormBuilder, private authService: AuthService , private readonly router:Router, private readonly route: ActivatedRoute) 
  {
    if (this.authService.currentUserValue) { 
      this.router.navigate(['/']);
    }
  }  

  get f() { return this.form.controls; }

  submit() {    
    this.authService.login(this.f.username.value, this.f.password.value)
    .subscribe(
      data=> {
        this.router.navigate([this.returnUrl]);
      },
      error=> {
        console.error("Error");
      },
    );            
  }  

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
