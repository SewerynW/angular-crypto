import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'coin-details',
    loadChildren: () => import('./views/coin-details/coin-details.module').then(m => m.CoinDetailsModule),
    data: {
      title: 'Coin details'
    }
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./views/portfolio/portfolio.module').then(m => m.PortfolioModule),
    data: {
      title: 'Portfolio'
    }

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
