import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsRendererComponent } from './options-renderer.component';

describe('OptionsRendererComponent', () => {
  let component: OptionsRendererComponent;
  let fixture: ComponentFixture<OptionsRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
