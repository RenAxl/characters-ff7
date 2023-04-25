import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLoggedIn: string = this.authService.decodedToken?.user_name;

  showMenu: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { 
    AuthService.emitiLogin.subscribe((data) => {
      this.userLoggedIn = data;
    });

    AuthService.emitiLogout.subscribe((data) => {
      this.userLoggedIn = data;
    });
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  haveRole(role: string){
    return this.authService.haveRole(role);
  }

}
