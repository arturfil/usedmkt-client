import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import services
import { NeedsLoginGuardService } from './guards/needs-login-guard.service';

//import components
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { MyItemsComponent } from './pages/my-items/my-items.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [

  { path: '', component: ItemListComponent },
  { path: 'items/:itemId', component: ItemDetailsComponent },
  { path: 'signup', component:SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myItems', component: MyItemsComponent},
  { path: 'account', component: AccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
