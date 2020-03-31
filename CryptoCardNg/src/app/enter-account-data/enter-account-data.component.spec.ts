import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAccountDataComponent } from './enter-account-data.component';

describe('EnterAccountDataComponent', () => {
  let component: EnterAccountDataComponent;
  let fixture: ComponentFixture<EnterAccountDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterAccountDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterAccountDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
