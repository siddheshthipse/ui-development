import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router){
    this.navigateTo('');

    setTimeout(() => {
      this.introJS.setOptions({
        // tooltipClass: 'customTooltip',
        disableInteraction: true,
        steps: [
          {
            element: '#step1',
            title: 'WELCOME',
            intro: 'Welcome to your new app!',
            position: 'bottom'
          },
          {
            element: '#step2',
            intro: 'This <b>STEP</b> focuses on an image. <br/> We also used some HTML tags!',
            position: 'right'
          },
          {
            element: '#step3',
            intro: "let's keep going",
            position: 'top'
          },
          {
            element: '#step4',
            intro: 'More features, more fun.',
            position: 'right'
          },
          {
            element: '#sidenav-user',
            intro: 'Side nav user',
            position: 'right'
          },
          {
            element: '#sidenav-workplace',
            intro: 'Workplace',
            position: 'right'
          },
          {
            element: '#step11',
            intro: 'More features, more fun.',
            position: 'right'
          },
          {
            element: '#step12',
            intro: 'More features, more fun.',
            position: 'right'
          }
        ],
        showProgress: true
      }).start();
    }, 2000);
  }
  title = 'ui-development';
  introJS:any = introJs();
  navigateTo(path:string){
    this.router.navigate([path]);
  }

  
}
