import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.css']
})
export class ProjectCreationComponent implements OnInit {

  cardActions:boolean = false;
  specialEffects:boolean = false;
  isCollapsed = false;
  tncVisible = false;
  activeCard:number;
  searchText:string;

  templateCount:number;
  constructor(private router:Router, private dataService:DataService) { }

  ngOnInit() {
    this.dataService.searchCount.subscribe((res)=>{
      console.log(res);
      this.templateCount = res;
    })
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  searchProjectTemplates(event:string){
    let searchQuery = event.toLocaleLowerCase();
    console.log(searchQuery);

    let searchResult = this.portfolioInfo.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchQuery);
    });

    console.log('SEARCH RESULT IS');
    console.log(searchResult);

    this.portfolioInfo = [...searchResult];
  }

  portfolioInfo:any[] = [
    {
      id:1,
      title:'S/4HANA Greenfield Implementation for Automotive'
    },
    {
      id:2,
      title:'Ariba Implementation for Public Sector'
    },
    {
      id:3,
      title:'ECC Change Impact Analysis for Retail'
    },
    {
      id:4,
      title:'ECC to S/4HANA System Conversion for Oil and Gas'
    },
    {
      id:5,
      title:'S/4HANA Selective DT for High Tech'
    },
    {
      id:6,
      title:'ECC Custom Objects Planning for Professionals'
    }
  ]

  showTerms(): void {
    this.tncVisible = true;
  }

  onAgreeTerms(): void {
    console.log('User agreed to the terms');
    this.tncVisible = false;
  }

  onDeclineTerms(): void {
    console.log('User declined the terms');
    this.tncVisible = false;
  }

  navigateToEditTemplate(){
    this.router.navigate(['edit-project-template']);
  }

  mouseOverCard(i:number){
    this.cardActions = true;
    this.specialEffects = true;
    this.activeCard = i;
  }

  mouseOutCard(){
    this.cardActions = false;
    this.specialEffects = false;
  }
}
