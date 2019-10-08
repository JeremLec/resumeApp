import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SkillsPage } from './skills.page';
import { NavExperiencesComponent } from '../../common/nav-experiences/nav-experiences.component';
import { FormationComponent } from 'src/app/common/formation/formation.component';
import { CompetencesComponent } from 'src/app/common/competences/competences.component';
import { ExperienceComponent } from 'src/app/common/experience/experience.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: SkillsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  declarations: [SkillsPage, NavExperiencesComponent,FormationComponent,CompetencesComponent,ExperienceComponent]
})
export class SkillsPageModule {}
