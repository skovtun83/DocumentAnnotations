import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DocumentRoutingModule } from './document-routing.module';
import { DocumentViewComponent } from './document-view/document-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DocumentViewComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    DocumentRoutingModule,
    SharedModule
  ],
})
export class DocumentModule {}
