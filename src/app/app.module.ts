import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: '',component:WelcomeComponent, pathMatch:'full'
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: 'questions', component: QuestionsComponent
  },
  {
    path: 'result', component: ResultComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    QuestionsComponent,
    ChangeBgDirective,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
