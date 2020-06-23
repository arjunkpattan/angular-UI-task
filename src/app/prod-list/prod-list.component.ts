import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductListService } from '../product-list.service';






@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
  list: any = [];
  displayedColumns: string[] = ['sn', 'id', 'name', 'minorder', 'maxorder', 'price'];

  host: string = environment.product_api;
  token = sessionStorage.getItem("token");


  constructor(private router: Router, private http: HttpClient, private service: ProductListService) { }

  ngOnInit(): void {
    this.prolist();
  }

  prolist(){
    this.service.getProductionList(this.token).subscribe(
      res => {
        this.list = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }
}

