import { Component, OnInit } from '@angular/core';
import { BuyersServiceService } from '../../services/buyers-service.service'

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {

	buyers:Array<Object>;

  constructor(private buyersService:BuyersServiceService) {
  		this.buyers = buyersService.getBuyers();
  		console.log(this.buyers);
   }

  ngOnInit() {
  }

  deleteBuyer(index){
  	this.buyers.splice(index, 1)
  }

}
