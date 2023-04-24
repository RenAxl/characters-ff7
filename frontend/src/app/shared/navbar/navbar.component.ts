import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLoggedIn: string = this.authService.decodedToken?.user_name;

  showMenu: boolean = false;

  constructor(private authService: AuthService) { 
    AuthService.emitiLogin.subscribe((data) => {
      this.userLoggedIn = data;
    });
  }

  ngOnInit(): void {
  }

}
