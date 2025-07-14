import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zoom',
  standalone: false,
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoomComponent {
  @Output() zoomScale = new EventEmitter<number>();
  
  zoom: number = 1;

  get zoomOutDisabled(): boolean {
    return this.zoom <= 0.25;
  }

  get zoomInDisabled(): boolean {
    return this.zoom >= 2;
  }

  onZoomOut(): void {
    this.zoom -= 0.25;
    this.zoomScale.emit(this.zoom);
  }

  onZoomIn(): void {
    this.zoom += 0.25;
    this.zoomScale.emit(this.zoom);
  }
}
