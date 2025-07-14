import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './ui/header/header.component';
import { ZoomComponent } from './ui/zoom/zoom.component';
import { AnnotateTextComponent } from './ui/annotate-text/annotate-text.component';
import { ScrollPositionDirective } from './core/scroll-position.directive';
import { SubscribedDirective } from './core/subscribed.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    ZoomComponent,
    AnnotateTextComponent,
    ScrollPositionDirective,
    SubscribedDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScrollingModule,
    DragDropModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
  ],
  exports: [
    HeaderComponent,
    ZoomComponent,
    AnnotateTextComponent,
    ScrollPositionDirective,
    SubscribedDirective,
  ]
})
export class SharedModule {}