import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './_components/button/button.component';
import { TestComponent } from './_components/test/test.component';


const exported = [TestComponent, ButtonComponent];
@NgModule({
  imports: [CommonModule],
  declarations: [...exported],
  exports: [...exported],
})
export class EComUiModule {}
