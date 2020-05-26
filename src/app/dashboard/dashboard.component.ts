import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'canvasjs/dist/canvasjs.min';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var chart = new CanvasJS.Chart("chartContainer", {
      title: {
        text: "My First Chart in CanvasJS"
      },
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "column",
          dataPoints: [
            { "label": "A", "y": 0 }, 
            { "label": "B", "y": 5 }, 
            { "label": "C", "y": 2 }, 
            { "label": "D", "y": 0 }, 
            { "label": "T", "y": 7 }, 
            { "label": "A", "y": 0 }, 
            { "label": "B", "y": 5 }, 
            { "label": "C", "y": 2 }, 
            { "label": "D", "y": 0 }, 
            { "label": "T", "y": 7 }, 
            { "label": "A", "y": 0 }, 
            { "label": "B", "y": 10 }, 
            { "label": "C", "y": 4 }, 
            { "label": "D", "y": 0 }, 
            { "label": "T", "y": 14 }]
        }
      ]
    });
    chart.render();
  }

}
