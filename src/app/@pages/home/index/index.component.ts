import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private readonly authService:AuthService) { }

  ngOnInit(): void {
  }

  testAuntenticacion()
  {
    this.authService.testAutenticacion();
  }
}
