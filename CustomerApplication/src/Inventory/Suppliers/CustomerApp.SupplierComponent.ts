import{ Component } from '@angular/core';
import { Supplier } from './CustomerApp.SupplierModel';
@Component({
    templateUrl:'./CustomerApp.SupplierView.html'
})
export class SupplierComponent{
    Title="InventoryApplication";
    mySupplierModel: Supplier = new Supplier();
    SupplierModels: Array<Supplier> = new Array<Supplier>();
add(){
    this.SupplierModels.push(this.mySupplierModel);
    this.mySupplierModel = new Supplier();
}
hasError(typeofvalidator:string,controlname:string) :boolean{
    return this.mySupplierModel.formSupplierGroup.controls[controlname].hasError(typeofvalidator);
}
SelectSupplier(_selected:Supplier){
    this.mySupplierModel = _selected;
}
}
