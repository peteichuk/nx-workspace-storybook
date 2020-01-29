import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneLibComponent } from './one-lib/one-lib.component';
import { SharedModule } from '@nx-workspace-name/shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [OneLibComponent],
  exports: [
    OneLibComponent
  ]
})
export class OneLibModule {}
