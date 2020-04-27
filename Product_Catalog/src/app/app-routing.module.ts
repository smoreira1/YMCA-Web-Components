import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OriginalYmcaLayoutComponent } from '@core/modules/core/components/original-ymca-layout/original-ymca-layout.component';
import { ProductsCatalogJupiterComponent } from '@shared/modules/angular-elements/components/products-catalog-jupiter/products-catalog-jupiter.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/jupiter', pathMatch: 'full' },
  { path: 'original-ymca', component: OriginalYmcaLayoutComponent },
  { path: 'jupiter', component: ProductsCatalogJupiterComponent },
  { path: 'neptune', component: ProductsCatalogJupiterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})

export class AppRoutingModule {}
