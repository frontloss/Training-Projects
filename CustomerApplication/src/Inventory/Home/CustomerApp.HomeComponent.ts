import{ Component, Injector } from '@angular/core';
import { HomeModel } from './CustomerApp.HomeModel';
import { BaseLogger,ConsoleLogger,ILogger } from '../Utility/CustomerApp.Logger'
@Component({
    templateUrl:'./CustomerApp.HomeView.html'
})
export class HomeComponent{
    Title="InventoryApplication";
    myHomeView:HomeModel = new HomeModel();
    logobj:BaseLogger = null;
constructor(_injector: Injector){
    this.logobj = _injector.get("2")
    this.logobj.Log();
    
}
}