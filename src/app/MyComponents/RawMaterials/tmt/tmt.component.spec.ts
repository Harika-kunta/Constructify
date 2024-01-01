import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmtComponent } from './tmt.component';

describe('TmtComponent', () => {
  let component: TmtComponent;
  let fixture: ComponentFixture<TmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
