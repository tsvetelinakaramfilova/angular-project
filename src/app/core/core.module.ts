import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorPageComponent, ErrorComponent],
  imports: [CommonModule, RouterModule, NgbAlertModule],
  exports: [HeaderComponent, FooterComponent, ErrorPageComponent, ErrorComponent],
})
export class CoreModule { }
