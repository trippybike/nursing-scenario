import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseButtonsComponent } from './response-buttons.component';

describe('ButtonsComponent', () => {
  let component: ResponseButtonsComponent;
  let fixture: ComponentFixture<ResponseButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
