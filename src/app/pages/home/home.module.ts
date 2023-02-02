import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { BannerComponent } from './banner/banner.component';
import { DesenvolvimentoComponent } from './desenvolvimento/desenvolvimento.component';

@NgModule({
  declarations: [HomeComponent, MainComponent, BannerComponent, DesenvolvimentoComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
})
export class HomeModule {}
