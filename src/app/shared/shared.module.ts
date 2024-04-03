import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmailDirective } from './validators/email.directive';
import { LoaderComponent } from './loader/loader.component';
import { SlicePipe } from './pipes/slice.pipe';



@NgModule({
  declarations: [EmailDirective, LoaderComponent, SlicePipe],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [EmailDirective, LoaderComponent, SlicePipe]
})
export class SharedModule { }
