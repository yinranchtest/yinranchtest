import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LodgingService } from '../../../services/lodging/lodging.service';

@Component({
  selector: 'app-lodging',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './lodging.component.html',
  styleUrl: './lodging.component.scss'
})
export class LodgingComponent implements OnInit {
  public venues:any[] = [];
  constructor(private router: Router, private _lodgingService:LodgingService) { }
  ngOnInit(): void {
    this.getLodging()
  }

  getLodging(){
    this._lodgingService.getLodgings().subscribe((data:any) => {
      this.venues = data;
      console.log(this.venues)
    },
    (error:any)=>{
      console.log("errror", error)
    });
  }
  clickToShowDetails(id:number) {
    this.router.navigate(['/lodging-detail', id])
  }
}
