import { Component, OnInit, Optional, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DistanceService } from '../../services/distance.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResultComponent implements OnInit {

  distance: number;
  popularSearch: any;
  popularSearchList: any[];

  constructor(private distanceService: DistanceService,
              private _dialogRef: MatDialogRef<ResultComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

    this.distance = data.distance;

    this.distanceService.getPopularSearch().subscribe(res => {
      this.popularSearch = res;
    })

    this.distanceService.getPopularSearchList().subscribe(res => {
      this.popularSearchList = res;
    })
  }

  ngOnInit() {
  }

  closeResult() {
    this._dialogRef.close();
  }
}
