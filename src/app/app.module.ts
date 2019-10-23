import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostComponent} from './post_component/post_component';
import {PostService} from "./services/post.service.";
import {AuthComponent} from './auth/auth.component';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from "@angular/router";
import {EditPostComponent} from './edit-component/edit_post_component';
import{AuthService} from './services/auth.service'
import {UserService} from "./services/user.service";
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {
    path: "blog",
    component: AppareilViewComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'edit/create',
    component: EditPostComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path:'new-user',
    component: NewUserComponent
  },
  {
    path: '',
    component: AuthComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AuthComponent,
    AppareilViewComponent,
    EditPostComponent,
    UserComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
