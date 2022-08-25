import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) }, { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
