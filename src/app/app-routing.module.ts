import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BossComponent } from './component/boss/boss.component';

const routes: Routes = [
  {
  path:'',
  component: BossComponent,
  children : [
    {
    path: 'products',
    loadChildren:() => import('./component/boss/boss.module').then(m => m.BOSSModule)
    }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
