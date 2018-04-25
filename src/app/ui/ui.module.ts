import { StudentComponent } from './../student/student.component';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';

@NgModule({
  imports: [
    ClarityModule,
    CommonModule
  ],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent, MainComponent, StudentComponent],
  exports: [
    LayoutComponent
  ]
})
export class UiModule { }
