import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentimageComponent } from './componentimage/componentimage.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "datos",
    pathMatch: "full"
  },
{
  path: "datos",
  component: AppComponent,
  //canActivate: [AuthGuard]
  //canActivate: [TimeGuard,AuthGuard]
  //canActivate: [AuthGuard]
},
{
  path: "verimg",
  component: ComponentimageComponent,
  //canActivate: [AuthGuard]
  //canActivate: [TimeGuard,AuthGuard]
  //canActivate: [AuthGuard]
}

]
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
