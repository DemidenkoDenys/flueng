import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsCarouselComponent } from './words-carousel.component';

describe('WordsCarouselComponent', () => {
  let component: WordsCarouselComponent;
  let fixture: ComponentFixture<WordsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
