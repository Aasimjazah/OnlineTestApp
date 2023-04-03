import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './MyComponent/test/test.component';
import { PlayButtonComponent } from './MyComponent/play-button/play-button.component';
import { ShowResultsComponent } from './MyComponent/show-results/show-results.component';

const routes: Routes = [
  {
    path:"startTest",
    component:TestComponent
  },
  {
    path:"",
    component:PlayButtonComponent
  },
  {
    path: "showResult",
    component:ShowResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
