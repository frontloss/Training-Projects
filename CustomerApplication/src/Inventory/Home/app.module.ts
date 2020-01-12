import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {FormsModule} from '@angular/forms';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import {MasterPageComponent} from '../Home/CustomerApp.MasterPageComponent';
import { HomeComponent } from '../Home/CustomerApp.HomeComponent';
import {BaseLogger, DbLogger, FileLogger, ConsoleLogger } from '../Utility/CustomerApp.Logger';
var providerscoll:any = [];
providerscoll.push({provide:"1",useClass:DbLogger})
providerscoll.push({provide:"2",useClass:FileLogger})
providerscoll.push({provide:BaseLogger ,useClass:ConsoleLogger})
@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(MainRoutes)
  ],
  // providers: [{provide: "1",useClass:DbLogger},
  //             {provide: "2",useClass:FileLogger},
  //             {provide: "3",useClass:ConsoleLogger}
  //            ],
  providers:[providerscoll],
   bootstrap: [MasterPageComponent]
})
export class AppModule { }
