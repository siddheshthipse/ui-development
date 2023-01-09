import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isCollapsed: boolean = false;
  userMaster: any;
  constructor(private dataService: DataService, private swUpdate: SwUpdate, private appRef: ApplicationRef) { }

  ngOnInit() {
    // this.checkStability()

    this.dataService.getData().subscribe((res: any) => {
      console.log("------FETCHED DATA FROM THE SERVER/SERVICE WORKER---------");
      console.log(res);
      this.userMaster = res;
      setTimeout(() => {
        this.lookForUpdates()
      }, 5000);
    })



    //CHECK WHETHER THE SERVICE WORKER IS ENABLED
    if (this.swUpdate.isEnabled) {
      console.log("SERVICE WORKER IS ENABLED");
    } else {
      console.log("SERVICE WORKER IS NOT ENABLED");
    }

    //CHECK FOR THE UPDATED EVENT
    this.swUpdate.available.subscribe((hash) => {
      console.log("NEW UPDATES ARE AVAILABLE, KINDLY REFRESH THE PAGE")
      console.log("HASH TYPE");
      console.log(hash.type)
      console.log("CURRENT HASH");
      console.log(hash.current);
      console.log("AVAILABLE HASH");
      console.log(hash.available)
    })

    this.swUpdate.activated.subscribe((hash) => {
      console.log("YOU ARE ON THE LATEST UPDATE NOW");
      console.log("HASH TYPE");
      console.log(hash.type)
      console.log("PREVIOUS HASH")
      console.log(hash.previous)
      console.log("CURRENT HASH")
      console.log(hash.current)
    })
  }

  lookForUpdates(){
    this.dataService.getData().subscribe((res)=>{
      console.log("---------PLEASE GIVE ME THE LATEST DATA---------")
      console.log(res)
      this.userMaster = res;
    })
  }

  checkStability() {
    this.appRef.isStable.subscribe((res) => {
      console.log("IS THE APPLICATION STABLE", res)
    })
  }
}
