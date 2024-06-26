import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmailDirective } from './validators/email.directive';
import { LoaderComponent } from './loader/loader.component';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { MinToHoursMinPipe } from './pipes/min-to-hours-min.pipe';



@NgModule({
  declarations: [EmailDirective, LoaderComponent, SlicePipe, ElapsedTimePipe, FormatDatePipe, MinToHoursMinPipe],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [EmailDirective, LoaderComponent, SlicePipe, ElapsedTimePipe, FormatDatePipe, MinToHoursMinPipe]
})
export class SharedModule { }
