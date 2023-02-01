import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HomeComponent, MainComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
})
export class HomeModule {}
