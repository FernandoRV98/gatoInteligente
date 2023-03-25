import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootsComponent } from './foots.component';

describe('FootsComponent', () => {
  let component: FootsComponent;
  let fixture: ComponentFixture<FootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



