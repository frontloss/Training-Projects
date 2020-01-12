import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';
import { SupplierComponent } from '../Suppliers/CustomerApp.SupplierComponent';
import { GridComponent1 } from '../Utility/CustomerApp.GridComponent1';
@NgModule({
  declarations: [
    SupplierComponent,GridComponent1
   ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(SupplierRoutes),ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'})
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule {}
