import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { NewformComponent } from './newform/newform.component';


const routes: Routes = [
    {
      path: "",
      component: BlogListComponent
    },
    {
      path: "item",
      component: BlogItemComponent
    },
    {
      path: "add-item",
      component: NewformComponent
    }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
