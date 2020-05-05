import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly authService:AuthService) { }

  ngOnInit(): void {
  }

  testAuntenticacion()
  {
    this.authService.testAutenticacion();
  }
}
