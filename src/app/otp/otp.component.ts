import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {


  OTPForm: FormGroup;
  token = sessionStorage.getItem( 'access' );

  constructor(private router: Router, private http: HttpClient, public service: ProductListService) {
    this.OTPForm = new FormGroup({
      otp: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const body =
    {
      username: this.service.mobileNo,
      password: this.OTPForm.value.otp
    };
    this.service.getAccessToken(body).subscribe(
      res => {
        const tempResponse: any = res;
        sessionStorage.setItem( 'token', tempResponse.access);
        this.router.navigate(['prod-list']);
      },
      err => {
        console.log(err.message);
      }
    );


  }


}
