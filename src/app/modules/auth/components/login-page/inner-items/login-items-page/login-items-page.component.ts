import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {CookieService} from "ngx-cookie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-items-page',
  templateUrl: './login-items-page.component.html',
  styleUrls: ['./login-items-page.component.scss']
})
export class LoginItemsPageComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(20)]),
  })

  constructor(private router: Router, private cookieService: CookieService, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  //handling login function
  login() {
    this.userService.login(
      this.loginForm.get('email')?.value.toString().trim(),
      this.loginForm.get('password')?.value.toString().trim()
    ).subscribe((response: any) => {
      if (this.loginForm.get('email')?.value.toString().trim() == response.data.email && this.loginForm.get('password')?.value.toString().trim() == response.data.password) {
        const tomorrow = new Date(new Date());
        tomorrow.setDate(tomorrow.getDate() + 1);
        const cookieOption = {
          expires: tomorrow
        }
        this.cookieService.putObject('userToken', response.data, cookieOption);
        if (response.data.post == "Admin") {
          this.router.navigate(['/admin']).then(() => {
              console.log("navigate to admin")
            }
          );
        } else {
          this.router.navigate(['/default']).then(() => {
              console.log("navigate to default")
            }
          );
        }
      } else {
        alert("No user found, Please check your user credentials and try again")
      }

    }, error => {
      if (error.status === 500) {
        alert("Something went wrong, Please check your user credentials and try again")
        console.log("500 ", error)
      } else if (error.status === 400) {
        alert("Something went wrong, Please try again")
        console.log("400 ", error);
      } else {
        console.log(error);
      }
    })

  }
}
