import { Component, OnInit } from '@angular/core';
import { DistanceService } from '../../services/distance.service';
import { MatDialog } from '@angular/material';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  source: string = 'ירושלים';
  destination: string = 'תל אביב';

  constructor(private distanceService: DistanceService,
              private dialog: MatDialog) { }

  ngOnInit() {
  }

  searchDistance() {
    if(this.source && this.destination) {
      this.distanceService.getDistance(this.source, this.destination).subscribe(res => {
        this.showResult(res.distance);
      })
    }
  }

  showResult(distance) {
    const dialogRef = this.dialog.open(ResultComponent, { 
      height : "100%",
      width : "100%",
      panelClass: 'black-background',
      disableClose: true,
      data: { distance: distance }
    });

    dialogRef.afterClosed().subscribe(res => {
      // this.source = '';
      // this.destination = '';
    })
  }
}
