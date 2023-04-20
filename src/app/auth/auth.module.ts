import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModalComponent } from './auth-modal/auth-modal.component';

@NgModule({
  declarations: [AuthModalComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AuthModalComponent],
})
export class AuthModule {}
