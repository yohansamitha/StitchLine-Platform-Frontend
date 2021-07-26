import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DefaultRoutingModule} from './default-routing.module';
import {DefaultComponent} from './default.component';
import {MatButtonModule} from "@angular/material/button";
import {CookieModule} from "ngx-cookie";

@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    MatButtonModule,
    CookieModule.forRoot(),
  ]
})
export class DefaultModule {
}
