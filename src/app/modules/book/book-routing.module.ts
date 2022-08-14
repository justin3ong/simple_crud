import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { NewformComponent } from './newform/newform.component';

const routes: Routes = [
  {
    path: "",
    component: BookListComponent
  },
  {
    path: "item",
    component: BookItemComponent
  },
  {
    path: "add-item",
    component: NewformComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),CommonModule],
  exports:[RouterModule]
})
export class BookRoutingModule { }
