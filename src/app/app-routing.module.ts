import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogItemComponent } from './modules/blog/components/blog-item/blog-item.component';
import { BlogListComponent } from './modules/blog/pages/blog-list/blog-list.component';
import { UserModule } from './modules/user/user.module';


const routes: Routes = [
{
  path: "blog",
  loadChildren: () => import("./modules/blog/blog.module").then(m => m.BlogModule) 
},
{
  path: "book",
  loadChildren: () => import("./modules/book/book.module").then(m => m.BookModule)
},
{
  path: "user",
  loadChildren: () => import("./modules/user/user.module").then(m => m.UserModule)
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
