import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthModalComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [AuthModalComponent],
})
export class AuthModule {}
