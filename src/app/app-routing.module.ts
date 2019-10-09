import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  { 
    path: 'experiences', 
    loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsPageModule)
  },
  { 
    path: 'portfolio', 
    loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioPageModule)
  },
  { 
    path: 'contact', 
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactPageModule) 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
