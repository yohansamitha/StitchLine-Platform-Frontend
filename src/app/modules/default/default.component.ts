import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private _router: Router, private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  handleLogOut() {
    this.cookieService.remove('userToken');
    alert("Logging out successfully");
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['/auth']).then(r => {
      console.log('successfully route to sign in');
    });
  }
}
