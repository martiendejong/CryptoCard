import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterBackupKeyComponent } from './enter-backup-key.component';

describe('EnterBackupKeyComponent', () => {
  let component: EnterBackupKeyComponent;
  let fixture: ComponentFixture<EnterBackupKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterBackupKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterBackupKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
