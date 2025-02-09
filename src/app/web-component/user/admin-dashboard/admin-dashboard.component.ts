import { Component } from '@angular/core';
import { AppBlogCardsComponent } from 'src/app/components/blog-card/blog-card.component';
import { AppEarningReportsComponent } from 'src/app/components/earning-reports/earning-reports.component';
import { AppPopularProductsComponent } from 'src/app/components/popular-products/popular-products.component';
import { AppSalesProfitComponent } from 'src/app/components/sales-profit/sales-profit.component';
import { AppTotalFollowersComponent } from 'src/app/components/total-followers/total-followers.component';
import { AppTotalIncomeComponent } from 'src/app/components/total-income/total-income.component';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
      MaterialModule,
      AppBlogCardsComponent,
      AppSalesProfitComponent,
      AppTotalFollowersComponent,
      AppTotalIncomeComponent,
      AppPopularProductsComponent,
      AppEarningReportsComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

}
