import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ChatModule } from './chat/chat.module';
import { SearchComponent } from './search/search.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ResultsComponent } from './results/results.component';
// import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    ResultsComponent,
    // ChatDialogComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { RouterModule }
