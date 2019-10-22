import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostComponent} from './post_component/post_component';
import {PostService} from "./services/post.service.";
import {AuthComponent} from './auth/auth.component';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from "@angular/router";
import {EditPostComponent} from './edit-component/edit_post_component';
import{AuthService} from './services/auth.service'

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
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
