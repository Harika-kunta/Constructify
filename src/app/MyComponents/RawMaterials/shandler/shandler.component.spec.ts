import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShandlerComponent } from './shandler.component';

describe('ShandlerComponent', () => {
  let component: ShandlerComponent;
  let fixture: ComponentFixture<ShandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
