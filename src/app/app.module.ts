import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent} from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { ContactComponent } from './contact/contact.component';
import { NewstoriesComponent } from './newstories/newstories.component';
import { HistoricalComponent } from './historical/historical.component';
import { ProgrammingbooksComponent } from './programmingbooks/programmingbooks.component';
import { NetworksComponent } from './networks/networks.component';
import { NovelsComponent } from './novels/novels.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    LogoutComponent,
    HomeComponent,
    AboutusComponent,
    TopStoriesComponent,
    ContactComponent,
    NewstoriesComponent,
    HistoricalComponent,
    ProgrammingbooksComponent,
    NetworksComponent,
    NovelsComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'registration',
        component:RegistrationComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'logout',
        component:LogoutComponent
      },
      {
      path:'home',
      component:HomeComponent
      },
      {
        path:'aboutus',
        component:AboutusComponent
      },
      {
        path:'top-stories',
        component:TopStoriesComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'newstories',
        component:NewstoriesComponent
      },

      {
        path:'historical',
        component:HistoricalComponent
      },

      {
        path:'programmingbooks',
        component:ProgrammingbooksComponent
      },

      {
        path:'networks',
        component:NetworksComponent
      },
      
      {
        path:'novels',
        component:NovelsComponent
      },


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
