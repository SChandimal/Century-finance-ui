import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavibarComponent} from './navibar/navibar.component';
import {LandOverviewComponent} from './land-overview/land-overview.component';
import {PurchasingCostsComponent} from './purchasing-costs/purchasing-costs.component';
import {DevelopmentCostsComponent} from './development-costs/development-costs.component';
import {AdvertisingCostsComponent} from './advertising-costs/advertising-costs.component';
import {ResaleCostsComponent} from './resale-costs/resale-costs.component';
import {SalesProfitabilityComponent} from './sales-profitability/sales-profitability.component';
import {SummaryComponent} from './summary/summary.component';
import {ApprovedProjectsComponent} from './approved-projects/approved-projects.component';
import {LandSaleProfileComponent} from './land-sale-profile/land-sale-profile.component';
import {RejectedProjecetComponent} from './rejected-projecet/rejected-projecet.component';
import {LocationsComponent} from './locations/locations.component';
import {AreawiseProjectComponent} from './areawise-project/areawise-project.component';

const routes: Routes = [
  {
    path: 'sidebar',
    component: SidebarComponent
  },
  {
    path: 'navibar',
    component: NavibarComponent
  },
  {
    path: 'landOverview',
    component: LandOverviewComponent
  },
  {
    path: 'purchasingCosts',
    component: PurchasingCostsComponent
  },
  {
    path: 'developmentCosts',
    component: DevelopmentCostsComponent
  },
  {
    path: 'advertisingCosts',
    component: AdvertisingCostsComponent
  },
  {
    path: 'resaleCosts',
    component: ResaleCostsComponent
  },
  {
    path: 'salesProfitability',
    component: SalesProfitabilityComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: 'approvedProjects',
    component: ApprovedProjectsComponent
  },
  {
    path: 'landSaleProfile',
    component: LandSaleProfileComponent
  },
  {
    path: 'areawiseProject',
    component: AreawiseProjectComponent
  },
  {
    path: 'rejectedProjecet',
    component: RejectedProjecetComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
