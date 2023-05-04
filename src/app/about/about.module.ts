import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MaxPipe } from '../customPipes/max.pipe';

@NgModule({
  declarations: [AboutComponent, MaxPipe],
  imports: [CommonModule, AboutRoutingModule],
  exports: [AboutComponent],
})
export class AboutModule {}
