import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'angular-ecom/src/app/data-type';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuType: string = 'default';
  sellerName:string="";
  userName:string="";
  searchResult:undefined|product[];
  cartItems=0;
  constructor(private route:Router) {}

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>
    {
      
      if(val.url){
        console.warn(val.url); 
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.warn("Inside seller Area"); 
          // let sellerStore=localStorage.getItem('seller');
          // let sellerData =sellerStore && JSON.parse(sellerStore)[0];
          //  this.sellerName=sellerData.name;
           this.menuType = 'seller';
           if(localStorage.getItem('seller')){
            let sellerStore=localStorage.getItem('seller');
            let sellerData=sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName=sellerData.name;
           }
        }
          else {
            console.warn("out side seller area")
           this.menuType = 'default';
         }
       }
      
    })
    
  }
  logout(){
    localStorage.removeItem('seller')
    this.route.navigate(['/']);
  }
}
