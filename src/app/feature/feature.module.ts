import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureComponent } from './feature.component';
import { AboutModule } from '../about/about.module';

@NgModule({
  declarations: [FeatureComponent],
  imports: [CommonModule, AboutModule],
})
export class FeatureModule {}
