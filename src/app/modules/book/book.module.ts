import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookRoutingModule } from './book-routing.module';
import { NewformComponent } from './newform/newform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditformComponent } from './editform/editform.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    NewformComponent,
    EditformComponent
  ],
  imports: [
    CommonModule,BookRoutingModule,FormsModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
