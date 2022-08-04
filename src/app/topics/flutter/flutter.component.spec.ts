import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterComponent } from './flutter.component';

describe('FlutterComponent', () => {
  let component: FlutterComponent;
  let fixture: ComponentFixture<FlutterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlutterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
