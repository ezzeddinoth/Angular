import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Views/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { HomeComponent } from './Views/home/home.component';
import { SelectBereichComponent } from './Views/select-bereich/select-bereich.component';
import { RemoveBereichComponent } from './Components/remove-bereich/remove-bereich.component';
import { TableComponent } from './Components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { TeamComponent } from './Views/team/team.component';
import { ContactComponent } from './Views/contact/contact.component';
import { AboutComponent } from './Views/about/about.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ScanningTestComponent } from './scanning-test/scanning-test.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    SelectBereichComponent,
    RemoveBereichComponent,
    TableComponent,
    TeamComponent,
    ContactComponent,
    AboutComponent,
    ScanningTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
