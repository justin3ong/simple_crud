import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { NewformComponent } from './newform/newform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    NewformComponent
  ],
  imports: [
    CommonModule,BlogRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class BlogModule { }
