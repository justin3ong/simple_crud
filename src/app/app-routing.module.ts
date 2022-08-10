import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogItemComponent } from './modules/blog/components/blog-item/blog-item.component';


const routes: Routes = [
{
  path: "blog",
  component: BlogItemComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
