import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalListComponent } from './modal-list/modal-list.component';
import { SearchComponent } from './search/search.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UpperCaseDirective } from '../customDirectives/upper-case.directive';
import { TransformTextDirective } from '../customDirectives/transform-text.directive';
import { HideDirective } from '../customDirectives/hide.directive';

@NgModule({
  declarations: [
    ModalListComponent,
    SearchComponent,
    TodoItemComponent,
    ModalAddComponent,
    ModalContainerComponent,
    TodoDetailComponent,
    UpperCaseDirective,
    TransformTextDirective,
    HideDirective,
  ],
  providers: [provideNgxMask()],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    AppRoutingModule,
  ],
  exports: [
    ModalListComponent,
    SearchComponent,
    TodoItemComponent,
    ModalAddComponent,
    ModalContainerComponent,
  ],
})
export class TodoModule {}
