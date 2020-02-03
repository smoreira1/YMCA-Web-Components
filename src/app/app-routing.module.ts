import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirBnbLayoutComponent } from './components/air-bnb-layout/air-bnb-layout.component';
import { OriginalYmcaLayoutComponent } from './components/original-ymca-layout/original-ymca-layout.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/original-ymca', pathMatch: 'full' },
  { path: 'air-bnb', component: AirBnbLayoutComponent },
  { path: 'original-ymca', component: OriginalYmcaLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})

export class AppRoutingModule {}
