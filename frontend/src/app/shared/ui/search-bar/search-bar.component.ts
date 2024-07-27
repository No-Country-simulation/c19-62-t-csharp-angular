import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './search-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  searchControl = new FormGroup({
    search: new FormControl(
      '',
      Validators.pattern(/^[^<>#&@!$%^*()_+={}[\]:;"'|\\,.?/`~-]*$/)
    ),
  });

  public onSearch(): void {
    const termSearch = this.searchControl.value.search?.trim();
    if (!termSearch || this.searchControl.invalid) return;

    console.log(termSearch);
    this.searchControl.reset();
  }
}
