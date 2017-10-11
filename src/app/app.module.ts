import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

// services
import { ItemApiService } from './services/item-api.service';
import { AuthApiService } from './services/auth-api.service';
import { NeedsLoginGuardService } from './guards/needs-login-guard.service';
import { WalmartApiService } from './services/walmart-api.service';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyItemsComponent } from './pages/my-items/my-items.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    MyItemsComponent,
    NotFoundComponent,
    ItemDetailsComponent,
    ItemListComponent,
    SignUpComponent,
    ItemFormComponent,
    NavbarComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [
    ItemApiService,
    AuthApiService,
    WalmartApiService,
    NeedsLoginGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
