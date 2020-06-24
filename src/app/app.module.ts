import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ChatModule } from './chat/chat.module';
import { SearchComponent } from './search/search.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ResultsComponent } from './results/results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    ResultsComponent,


  ],
  imports: [
    BrowserModule,
    ChatModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { RouterModule }
