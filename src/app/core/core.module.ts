import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, ErrorPageComponent],
})
export class CoreModule { }
