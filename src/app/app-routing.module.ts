import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirBnbLayoutComponent } from '@core/modules/core/components/air-bnb-layout/air-bnb-layout.component';
import { OriginalYmcaLayoutComponent } from '@core/modules/core/components/original-ymca-layout/original-ymca-layout.component';
import { ProductsCatalogJupiterComponent } from '@shared/modules/angular-elements/components/products-catalog-jupiter/products-catalog-jupiter.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/original-ymca', pathMatch: 'full' },
  { path: 'air-bnb', component: AirBnbLayoutComponent },
  { path: 'original-ymca', component: OriginalYmcaLayoutComponent },
  { path: 'jupiter', component: ProductsCatalogJupiterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})

export class AppRoutingModule {}
