import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandComponent } from './sand.component';

describe('SandComponent', () => {
  let component: SandComponent;
  let fixture: ComponentFixture<SandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
