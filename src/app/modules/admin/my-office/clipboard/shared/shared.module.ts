import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardCardComponent } from './clipboard-card/clipboard-card.component';
import { ClipboardEmptyCardComponent } from './clipboard-empty-card/clipboard-empty-card.component';
import { ClipboardTasklistComponent } from './clipboard-tasklist/clipboard-tasklist.component';
import { ClipboardTasklistItemComponent } from './clipboard-tasklist-item/clipboard-tasklist-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { FuseCardModule } from '@fuse/components/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    ClipboardCardComponent,
    ClipboardEmptyCardComponent,
    ClipboardTasklistComponent,
    ClipboardTasklistItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    RouterModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    FuseScrollbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    FuseCardModule,
    MatChipsModule
  ],
  exports: [
    ClipboardCardComponent,
    ClipboardEmptyCardComponent,
    ClipboardTasklistComponent,
    ClipboardTasklistItemComponent,
    MatExpansionModule,
    CommonModule,
    FuseCardModule,
    MatChipsModule
  ]
})
export class ClipboardSharedModule { }
