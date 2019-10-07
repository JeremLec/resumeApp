import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-experiences',
  templateUrl: './nav-experiences.component.html',
  styleUrls: ['./nav-experiences.component.scss'],
})
export class NavExperiencesComponent implements OnInit {
  parcours: string = 'formations';
  viewMode = 'formations';

  
  
  constructor() { 
    
  }


  ngOnInit() {
  }

}
