import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvanComponent } from './avan/avan.component';
import { CcmComponent } from './ccm/ccm.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"",component:HomeComponent
  },
  {
    path:"avantages",component:AvanComponent
  },
  {
    path:"shop",component:ShopComponent
  },
  {
    path:"ccm",component:CcmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
