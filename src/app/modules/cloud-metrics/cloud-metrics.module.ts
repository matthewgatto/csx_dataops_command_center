import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

import { SharedModule } from '@modules/shared.module';

import { CloudMetricsRoutingModule } from './cloud-metrics-routing.module';
import { CloudMetricsComponent } from './cloud-metrics.component';
import { ViewHiddenMetricsComponent } from './dialogs/view-hidden/view-hidden-metrics.dialog';
import { MetricsChartBigComponent } from './dialogs/chart-big/metrics-chart-big.dialog';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    CloudMetricsComponent,
    ViewHiddenMetricsComponent,
    MetricsChartBigComponent
  ],
  imports: [
    CommonModule,
    CloudMetricsRoutingModule,
    PlotlyModule,
    SharedModule,
  ],
})
export class CloudMetricsModule { }
