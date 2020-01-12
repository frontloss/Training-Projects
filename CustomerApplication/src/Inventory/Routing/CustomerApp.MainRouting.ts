import { HomeComponent } from "../Home/CustomerApp.HomeComponent";
export const MainRoutes=[
    {path:'Home',component:HomeComponent},
    {path:'Customers', loadChildren:'../Customer/CustomerApp.CustomerModule#CustomerModule'},
    {path:'Suppliers', loadChildren:'../Suppliers/CustomerApp.SupplierModule#SupplierModule'},
    {path:'',component:HomeComponent}
]
