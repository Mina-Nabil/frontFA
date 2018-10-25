import { Component } from '@angular/core';
import { IClass, IStudentChart } from '../resources/interfaces';
import { ClassService } from '../resources/class.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  globalChartOptions: any = {
  responsive: true,
  legend: {
    display: true,
    position: 'bottom'
  }
};


barChartLabels: string[] = ['Week1', 'Week2', 'Week3', 'Week4 - EOM'];
barChartType = 'bar';
barChartLegend = true;


barChartOptions: any = Object.assign({
  scaleShowVerticalLines: true,
  tooltips: {
    mode: 'index',
    intersect: false
  },
  responsive: true,
  scales: {
    xAxes: [{
      gridLines: {
        color: 'rgba(0,0,0,0.02)',
        defaultFontColor: 'rgba(0,0,0,0.02)',
        zeroLineColor: 'rgba(0,0,0,0.02)'
      },
      stacked: false,
      ticks: {
        beginAtZero: true
      }
    }],
    yAxes: [{
      gridLines: {
        color: 'rgba(0,0,0,0.02)',
         defaultFontColor: 'rgba(0,0,0,0.02)',
        zeroLineColor: 'rgba(0,0,0,0.02)'
      },
      stacked: false,
      ticks: {
        beginAtZero: true
      }
    }]
  }
}, this.globalChartOptions);


  barChartTEMPLATE: any[] = [{
    data: null,
    label: 'Total Hours',
    borderWidth: 0
  }, {
    data: null,
    label: 'Attended Hours',
    borderWidth: 0
  }];


  classesObj : IClass[];

  chartsObj : IStudentChart[] = [{
    title: null,
    Attended: null,
    Available: null,
    Duration_A: null,
    Duration_T: null
  }];

  barChartArr: any[] = [{}];


  constructor(private _classService: ClassService){

    this._classService.getClasses().subscribe(data => {
      this.classesObj = data;

      let index = 0;
      for(let clss of this.classesObj){
        if(index == 0)this.barChartArr[index] = this.getClassCharts(clss.CLSS_ID, clss.CLSS_NME);
        else
        this.barChartArr.push(this.getClassCharts(clss.CLSS_ID, clss.CLSS_NME));
        index++;
      }
    });
    console.log(this.barChartArr);
  }

  modifyChartArr(chart: IStudentChart, className:string ,month:string){

    let tempData = this.barChartTEMPLATE;
    tempData[0].data = chart.Available;
    tempData[1].data = chart.Attended;

    let chartaya = {
      title: className + ' ' + month,
      Duration_A : chart.Duration_A,
      Duration_T : chart.Duration_T,
      chartData  : tempData
    };

    return chartaya;

  }

  getClassCharts(ClassID: number, ClassName: string): IStudentChart[] {
    let youm = new Date();
    let month = youm.getUTCMonth() + 1;
    let year = youm.getUTCFullYear();
    let retArr : any[] = [{ }];

    for(let i =0 ; i < 3 ; i++){
      if(month - i == 0){ //date subtraction management code
        month = 12;
        year = year - 1;
      }
      this._classService.getClassChart(ClassID, month - i, year).subscribe(data => {
        if(i==0)retArr[i] = this.modifyChartArr(data, ClassName, this.getMonthStr(month-i));
        else
        retArr.push(this.modifyChartArr(data, ClassName, this.getMonthStr(month-i)));
    });
  }
  return retArr;
  }

  getMonthStr(num: number){
    if(num == 1)return 'Jan';
    if(num == 2)return 'Feb';
    if(num == 3)return 'Mar';
    if(num == 4)return 'Apr';
    if(num == 5)return 'May';
    if(num == 6)return 'Jun';
    if(num == 7)return 'Jul';
    if(num == 8)return 'Aug';
    if(num == 9)return 'Sep';
    if(num == 10)return 'Oct';
    if(num == 11)return 'Nov';
    if(num == 12)return 'Dec';
  }

}
