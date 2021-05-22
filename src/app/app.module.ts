import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { saleReducer } from './providers/store/sales.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SaleEffects } from './providers/store/sales.effects';
import { RoviandaApiService } from './providers/services/Rovianda.Api.Service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
        sales:saleReducer
    }),
    EffectsModule.forRoot([SaleEffects])
  ],
  providers: [RoviandaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
