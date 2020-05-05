import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.services';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'src/app/helpers/form.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  
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
    
    this.authService.register(this.f.nom_usuario.value, this.f.clv_usuario.value)
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
      nom_usuario: ['', Validators.required],
      clv_usuario: ['', Validators.required],
      clv_repeat: [''],
    });

    this.form.get('clv_repeat').setValidators(
      [CustomValidators.equals(this.form.get('clv_usuario')), Validators.required]      
    );
    
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';    
    
  }
  
}
