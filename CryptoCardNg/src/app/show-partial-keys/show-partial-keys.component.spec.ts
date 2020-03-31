import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPartialKeysComponent } from './show-partial-keys.component';

describe('ShowPartialKeysComponent', () => {
  let component: ShowPartialKeysComponent;
  let fixture: ComponentFixture<ShowPartialKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPartialKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPartialKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
