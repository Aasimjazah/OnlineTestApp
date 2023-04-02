import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './MyComponent/test/test.component';
import { PlayButtonComponent } from './MyComponent/play-button/play-button.component';

const routes: Routes = [
  {
    path:"startTest",
    component:TestComponent
  },
  {
    path:"",
    component:PlayButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
