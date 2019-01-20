import { Component, OnInit } from '@angular/core';
import { DistanceService } from '../../services/distance.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  source: string = '';
  destination: string = '';

  constructor(private distanceService: DistanceService) { }

  ngOnInit() {
  }

  searchDistance() {
    if(this.source && this.destination) {
      this.distanceService.getDistance(this.source, this.destination).subscribe(res => {
        console.log('res: ', res);
      })
    }
  }
}
