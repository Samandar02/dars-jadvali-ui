import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  hasData:boolean = false;
  schedule = [
    {
      week: 0,
      paras: [
        {
          subject: "Algortimlar va berilganlar strukturalari",
          uqit: "U.Tuliyev",
          class: "A-203",
          subType: "maruza",
        },
        {
          subject: "Algoritmik tillar va dasturlash",
          uqit: "Sh.Xojayev",
          class: "A-114",
          subType: "amaliyot",
        }
      ]
    },
    {
      week: 1,
      paras: [
        {
          subject: "Algortimlar va berilganlar strukturalari",
          uqit: "Z.Abdujabborov",
          class: "A-114",
          subType: "amaliyot",
        },
        {
          subject: "Ehtimollar nazariyasi va matematik statistika",
          uqit: "A.Hamdamov",
          class: "A-410",
          subType: "amaliyot",
        }
      ]
    }, {
      week: 2,
      paras: [
        {
          subject: "Berilganlar bazasi ",
          uqit: ".Z.Abdujabborov",
          class: "A-112",
          subType: "amaliyot",
        },
        {
          subject: "Ehtimollar nazariyasi va matematik statistika",
          uqit: "A.Begmatov ",
          class: "A-105",
          subType: "ma'ruza",
        }
      ]
    }, {
      week: 3,
      paras: [
        {
          subject: "Berilganlar bazasi ",
          uqit: "M.Hakimov",
          class: "A-105",
          subType: "ma'ruza",
        },
        {
          subject: "Algoritmik tillar va dasturlash",
          uqit: "Sh.Xojayev",
          class: "A-11",
          subType: "amaliyot",
        }
      ]
    }, {
      week: 4,
      paras: [
        {
          subject: "Sun'iy intellekt va neyronto'rli texnologiyalar",
          uqit: "B.Akbarov",
          class: "A-112",
          subType: "amaliyot",
        },
        {
          subject: "Sun'iy intellekt va neyronto'rli texnologiyalar",
          uqit: "E.Navro'zov",
          class: "A-124",
          subType: " ma'ruza",
        }
      ]
    }, {
      week: 5,
      paras: []
    }, {
      week: 6,
      paras: []
    },

  ]
  todaySchedule:any = [];
  ngOnInit(){
    let date = new Date();
    this.title = this.getNameOfDay(date.getDay());
    this.todaySchedule = this.schedule.find(s => s.week == date.getDay()-1);
    this.hasData = (this.todaySchedule == undefined);
  }
  getNameOfDay(i:number){
    return ["dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba","Yakshanba"][i-1]
  }
}
