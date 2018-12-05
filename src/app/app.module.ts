import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavibarComponent } from './navibar/navibar.component';
import { LandOverviewComponent } from './land-overview/land-overview.component';
import { PurchasingCostsComponent } from './purchasing-costs/purchasing-costs.component';
import { DevelopmentCostsComponent } from './development-costs/development-costs.component';
import { AdvertisingCostsComponent } from './advertising-costs/advertising-costs.component';
import { ResaleCostsComponent } from './resale-costs/resale-costs.component';
import { SalesProfitabilityComponent } from './sales-profitability/sales-profitability.component';
import { SummaryComponent } from './summary/summary.component';
import { ApprovedProjectsComponent } from './approved-projects/approved-projects.component';
import { LandSaleProfileComponent } from './land-sale-profile/land-sale-profile.component';
import { AreawiseProjectComponent } from './areawise-project/areawise-project.component';
import { RejectedProjecetComponent } from './rejected-projecet/rejected-projecet.component';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavibarComponent,
    LandOverviewComponent,
    PurchasingCostsComponent,
    DevelopmentCostsComponent,
    AdvertisingCostsComponent,
    ResaleCostsComponent,
    SalesProfitabilityComponent,
    SummaryComponent,
    ApprovedProjectsComponent,
    LandSaleProfileComponent,
    AreawiseProjectComponent,
    RejectedProjecetComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
