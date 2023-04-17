import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './toast/toast.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ToastComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HeaderComponent, FooterComponent, ToastComponent],
})
export class SharedModule {}
