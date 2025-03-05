import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadoproductoComponent } from './listadoproducto/listadoproducto.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [  
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'listadoproductos', component: ListadoproductoComponent},
  {path: '**', component: ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
