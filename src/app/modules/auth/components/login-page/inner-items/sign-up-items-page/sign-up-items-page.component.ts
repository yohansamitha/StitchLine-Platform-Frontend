import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import CustomerDTO from "../../../../dto/CustomerDTO";

@Component({
  selector: 'app-sign-up-items-page',
  templateUrl: './sign-up-items-page.component.html',
  styleUrls: ['./sign-up-items-page.component.scss']
})
export class SignUpItemsPageComponent implements OnInit {

  customerType = true;
  loading = false;

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    address: new FormControl('', [Validators.minLength(3), Validators.required]),
    mobile: new FormControl('', [Validators.minLength(3), Validators.required]),
    username: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    nic: new FormControl('', [Validators.minLength(3), Validators.required]),
    employeeNumber: new FormControl('', [Validators.minLength(5), Validators.required]),
  })


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  register() {
    //active progress bar
    this.loading = true;

    //setting user type
    function getPost(customerType: boolean) {
      return (customerType) ? "Customer" : "Admin";
    }

    //creating customer dto
    const dto = new CustomerDTO(
      this.signUpForm.get('email')?.value.toString().trim(),
      this.signUpForm.get('name')?.value.toString().trim(),
      this.signUpForm.get('address')?.value.toString().trim(),
      this.signUpForm.get('mobile')?.value,
      this.signUpForm.get('username')?.value.toString().trim(),
      this.signUpForm.get('password')?.value.toString().trim(),
      this.signUpForm.get('nic')?.value.toString().trim(),
      this.signUpForm.get('employeeNumber')?.value.toString().trim(),
      getPost(this.customerType)
    );
    console.log(dto)
    this.userService.register(dto).subscribe(response => {
      this.loading = false;
      if (response.code == "201") {
        alert("Customer " + response.data.firstName + " successful")
      }
    }, error => {
      this.loading = false;
      if (error.error.code == "400") {
        alert(error.error.data);
      }
    })

  }

  OnRadioButtonChange(value: string) {
    console.log(value);
    if (value === "Customer") {
      this.customerType = true;
    } else if (value === "Admin") {
      this.customerType = false;
    }
    this.signUpForm.get('address')?.setValue("");
    this.signUpForm.get('nic')?.setValue("");
    this.signUpForm.get('employeeNumber')?.setValue("");
  }
}
