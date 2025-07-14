import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-annotate-text',
  standalone: false,
  templateUrl: './annotate-text.component.html',
  styleUrls: ['./annotate-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnnotateTextComponent {
  @Output() change = new EventEmitter<string>();

  showForm: boolean = false;
  annotationControl: FormControl = new FormControl(null);

  toggleForm(): void {
    this.showForm = !this.showForm;
    this.annotationControl.reset();
  }

  onAdd(): void {
    setTimeout(() => {
      const value = this.annotationControl.value;

      if (value !== null && value !== '') {
        this.change.emit(value);
        this.annotationControl.reset();
      }
    }, 200); // wait 2 milliseconds before add
  }
}