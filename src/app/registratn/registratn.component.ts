import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-registratn',
  templateUrl: './registratn.component.html',
  styleUrls: ['./registratn.component.css']
})
export class RegistratnComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private http: HttpClient, private service: ProductListService) {
    this.loginForm = new FormGroup({
      mobile: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const body =
    {
      phone: '+91' + this.loginForm.value.mobile
    };
    this.service.getOTP(body).subscribe(
      res => {
        this.service.mobileNo = body.phone;
        this.service.otp = res;
        this.router.navigate(['otp']);
      },
      err => {
        console.log(err.message);
      }
    );

  }

}
