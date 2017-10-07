import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import services
import { NeedsLoginGuardService } from './guards/needs-login-guard.service';

//import components
import { ItemListComponent } from './pages/item-list/item-list.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'signup', component:SignUpComponent },
  { path: 'login', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
