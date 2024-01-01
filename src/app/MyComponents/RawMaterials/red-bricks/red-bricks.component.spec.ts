import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBricksComponent } from './red-bricks.component';

describe('RedBricksComponent', () => {
  let component: RedBricksComponent;
  let fixture: ComponentFixture<RedBricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedBricksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedBricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
