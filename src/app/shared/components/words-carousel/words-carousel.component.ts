import { Component, OnInit, Input, HostListener, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-words-carousel',
  templateUrl: './words-carousel.component.html',
  styleUrls: ['./words-carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsCarouselComponent implements OnInit {

  @Input() words: string[];

  public selectedIndex: number;

  constructor() { }

  ngOnInit() {
    if (this.words && Array.isArray(this.words) && this.words.length > 0) {
      this.selectedIndex = Math.floor(this.words.length / 2);
    }
  }

  public onWordClicked(index: number) {
    this.selectedIndex = index;
  }

  public getSize(index: number): string {
    const prefix = 'item';
    const size = 1 - (Math.abs(Math.floor(this.selectedIndex) - index) / 10);
    const sizeStr = `${size.toFixed(1)}`.replace('.', '-');

    return `${prefix}-${sizeStr}`;
  }

  public getLeft(index: number): number {
    const size = Math.floor(this.selectedIndex) - index;
    const plus = size > 0;
    const sizeIncremented = size === 0 ? 1 : plus ? size + 1 : size - 1;
    return Math.abs(sizeIncremented) * -5;
  }

  public getTop(index: number): number {
    const size = Math.floor(this.selectedIndex) - index;
    const plus = size > 0;
    const sizeIncremented = size === 0 ? 1 : plus ? size + 1 : size - 1;
    const array = new Array(Math.abs(sizeIncremented)).fill(null);
    const top = array.reduce((acc, n, i) => {
      return acc + this.calculateTop(i + 1);
    }, 0);
    const result = sizeIncremented === 1 ? 0 : sizeIncremented > 0 ? top : top * -1;
    console.log(result);
    return result;
  }

  private calculateTop(n) {
    return n === 1 ? 0 : Math.round(100 / (n > 0 ? n - 0.3 : n + 0.3));
  }

  private scrollUp() {
    if (this.selectedIndex > 0) {
      --this.selectedIndex;
    }
  }

  private scrollDown() {
    if (this.selectedIndex < this.words.length - 1) {
      ++this.selectedIndex;
    }
  }

  @HostListener('document:keydown.arrowup')
  onArrowUp() {
    this.scrollUp();
  }

  @HostListener('document:keydown.arrowdown')
  onArrowDown() {
    this.scrollDown();
  }

}
