import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceSavingComponent } from './space-saving.component';

describe('SpaceSavingComponent', () => {
  let component: SpaceSavingComponent;
  let fixture: ComponentFixture<SpaceSavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceSavingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
