import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CdkDragEnd, Point } from '@angular/cdk/drag-drop';
import { IDocument } from 'src/app/shared/models';
import { NgClassType } from 'src/app/shared/types';
import { DocumentService } from 'src/app/shared/api-service/document.service';

@Component({
  selector: 'app-document-view',
  standalone: false,
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.scss'],
})
export class DocumentViewComponent implements OnInit {
  document$: Observable<IDocument> | null = null;
  
  annotations: string[] = [];
  dragPosition: Point[] = [];
  dragged: boolean[] = [];
  
  zoomScale: number = 1;
  scrollTopPosition: number = 0;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this._getDocumentInfo();
  }

  private _getDocumentInfo(): void {
    this.document$ = this.documentService.getDocument();
  }

  private _isString(value: unknown): boolean {
    return typeof value === 'string';
  }

  getZoomScale(scale: number): any {
    this.zoomScale = scale;
  }

  onAddAnnotation(annotation: string): void {
    if (this._isString(annotation)) {
      this.annotations.push(annotation);
      const index: number = this.annotations.length -1;
      this.dragPosition[index] = { x: 0, y: this.scrollTopPosition };
    }
  }

  onRemoveAnnotation(index: number): void {
    this.annotations.splice(index, 1);
    this.dragPosition.splice(index, 1);
    this.dragged.splice(index, 1);
  }

  onScroll(event: { scrollTop: number, scrollHeight: number, clientHeight: number }): void {
    this.scrollTopPosition = event.scrollTop;
  }

  onDragEnd(_: CdkDragEnd, index: number): void {
    this.dragged[index] = true;
  }

  getDraggedStyleClass(index: number): NgClassType {
    return {
      'drag-element__dragged': this.dragged[index]
    }
  }

  onSaveDocument(document: IDocument): void {
    const updatedDocument: IDocument = {
      ...document,
      annotations: this.annotations
    };

    this.documentService.saveDocument(updatedDocument);
  }
}