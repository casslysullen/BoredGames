import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ChatModule } from './chat/chat.module';
import { SearchComponent } from './search/search.component';
import { MatSliderModule } from '@angular/material/slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { ResultsComponent } from './results/results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';

>>>>>>> origin/quita

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
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatSliderModule,
=======
    BrowserAnimationsModule
>>>>>>> origin/quita
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { RouterModule }
