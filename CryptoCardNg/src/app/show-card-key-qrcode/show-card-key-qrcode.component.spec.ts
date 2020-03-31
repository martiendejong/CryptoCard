import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCardKeyQrcodeComponent } from './show-card-key-qrcode.component';

describe('ShowCardKeyQrcodeComponent', () => {
  let component: ShowCardKeyQrcodeComponent;
  let fixture: ComponentFixture<ShowCardKeyQrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCardKeyQrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCardKeyQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
