import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';

import { IconModule } from '../../shared/ui/icon/icon.module';
import { LectureThreeComponent } from './lecture3.component';

const routes: Routes = [{ path: '', component: LectureThreeComponent }];

@NgModule({
  imports: [CommonModule, TuiButtonModule, RouterModule.forChild(routes), IconModule],
  declarations: [LectureThreeComponent],
})
export class LectureThreeModule {}
