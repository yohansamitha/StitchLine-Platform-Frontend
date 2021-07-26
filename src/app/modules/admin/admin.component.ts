import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private _router: Router, private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  handleLogOut() {
    this.cookieService.remove('userToken');
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['/default']).then(r => {
      console.log('successfully route to sign in');
    });
    alert("Logging out successfully");
  }
}
