import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.services';
import { Router, ActivatedRoute } from '@angular/router';


// TODO: quitar esta interfaz para la fake data
interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-usuario-alta',
  templateUrl: './usuario-alta.component.html',
  styleUrls: ['./usuario-alta.component.scss']
})
export class UsuarioAltaComponent implements OnInit {

  form: FormGroup;
  returnUrl: string;

  // TODO: quitar fake data
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  constructor(
    private readonly formBuilder: FormBuilder, 
    private authService: AuthService , 
    private readonly router:Router, 
    private readonly route: ActivatedRoute) 
  {
    if (this.authService.currentUserValue) { 
      this.router.navigate(['/']);
    }
  }  
  
  get f() { return this.form.controls; }

  /**
   * Hace envio de el formulario al servicio
   */
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

  /**
   * Metodo de interfaz OnInit
   * se llama una vez creado el componente
   */  
  ngOnInit() {

    this.form = this.formBuilder.group({
      curp: ['', Validators.required],
      correo: ['', Validators.required],
      lada: ['', Validators.required],
      telefono: ['', Validators.required],
      contrasenia: ['', Validators.required],
      contraseniaReapet: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  /**
   * evento de click en el boton registrar
   */
  onRegister(){
    this.router.navigate(["auth/register"]);
  }

}
