// star-rating.component.ts
import { Component, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center">
      <div class="flex text-yellow-400">
        @for (star of starsArray; track star) {
          <span (click)="handleClick(star)" [class.cursor-pointer]="interactive">
            @if (star <= currentRating) {
              <!-- Estrella llena -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            } @else if (star - 0.5 <= currentRating) {
              <!-- Media estrella -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <defs>
                  <linearGradient id="half-star-{{star}}" x1="0" x2="100%" y1="0" y2="0">
                    <stop offset="50%" stop-color="currentColor"/>
                    <stop offset="50%" stop-color="var(--empty-star-color)"/>
                  </linearGradient>
                </defs>
                <path [attr.fill]="'url(#half-star-' + star + ')'" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            } @else {
              <!-- Estrella vacía -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" [style.color]="emptyStarColor" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            }
          </span>
        }
      </div>
      @if (showRate) {
        <span class="ml-2 text-sm text-gray-400 font-mono">
          ({{ currentRating | number:'1.1-1' }})
        </span>
      }
    </div>
  `,
  styles: [`
    :host {
      --empty-star-color: #6b7280;
    }
  `]
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() interactive: boolean = false;
  @Input() showRate: boolean = true;
  @Input() emptyStarColor: string = '#6b7280';
  @Input() starCount: number = 5;

  ratingChange = output<number>();
  
  starsArray = Array(this.starCount).fill(0).map((x, i) => i + 1);
  currentRating = this.rating;

  ngOnChanges() {
    this.currentRating = this.rating;
    this.starsArray = Array(this.starCount).fill(0).map((x, i) => i + 1);
  }

  handleClick(star: number): void {
    if (!this.interactive) return;
    
    this.currentRating = star;
    this.ratingChange.emit(star);
  }
}