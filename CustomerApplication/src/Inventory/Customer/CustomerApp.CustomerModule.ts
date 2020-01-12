import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {CustomerRoutes} from '../Routing/CustomerApp.CustomerRouting';
import { CustomerComponent } from '../Customer/CustomerApp.CustomerComponent';
import { GridComponent } from '../Utility/CustomerApp.GridComponent';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [CustomerComponent,GridComponent],
  imports: [CommonModule,FormsModule,RouterModule.forChild(CustomerRoutes),ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'}), HttpClientModule],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
