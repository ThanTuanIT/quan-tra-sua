import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [ItemCardComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ItemCardComponent, NavbarComponent]
})
export class ShareModule { }
