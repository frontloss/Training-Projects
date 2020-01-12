import { Component, Injector } from '@angular/core';
import {Customer} from './CustomerApp.CustomerModel';
import { ConsoleLogger,ILogger, BaseLogger } from '../Utility/CustomerApp.Logger'
import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http"; 
@Component({
templateUrl:'./CustomerApp.CustomerView.html'
})
export class CustomerComponent{
    Title = "InventoryApplication";
    CustomerModel: Customer = new Customer();
    CustomerModels: Array<Customer> = new Array<Customer>();
Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
}
hasError(typeofvalidator:string,controlname:string) :boolean{
    return this.CustomerModel.formCustomerGroup.controls[controlname].hasError(typeofvalidator);
   
}
SelectCustomer(_selected:Customer){
    this.CustomerModel = _selected;
}
//logobj:ILogger = new ConsoleLogger();
//Deendency Injection Implementation
logobj:BaseLogger = null;
// constructor(_injector: Injector,public http:Http){
//     this.logobj= _injector.get("1");
//     this.logobj.Log();
constructor(_injector: Injector,public httpc:HttpClient){
     this.logobj= _injector.get("1");
     this.logobj.Log();
    
}
PosttoServer(){
    var custdto:any={};
    custdto.CustomerCode = this.CustomerModel.CustomerCode;
    custdto.CustomerName = this.CustomerModel.CustomerName;
    custdto.CustomerAmount = this.CustomerModel.CustomerAmount;
    //this.http.post("http://localhost:3000/posts",custdto).subscribe(this.Success,this.Error);
    this.httpc.post("http://localhost:3000/posts",custdto).subscribe(res=>this.Success(res),res=>this.Error(res));
}
// Error(res){
//     console.debug(res.json());
// }
// Success(res){
//     this.CustomerModels = res.json();
//     console.log(res.json());
// }
Error(errors){
    console.log(errors.json());
    
}
Success(res){
    this.GetfromServer();
}
SuccessGet(data){
    this.CustomerModels = data;
}
GetfromServer(){
    this.httpc.get("http://localhost:3000/posts").subscribe(res=>this.SuccessGet(res),res=>this.Error(res));
}
}

