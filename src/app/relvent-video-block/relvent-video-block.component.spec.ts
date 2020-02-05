import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelventVideoBlockComponent } from './relvent-video-block.component';

describe('RelventVideoBlockComponent', () => {
  let component: RelventVideoBlockComponent;
  let fixture: ComponentFixture<RelventVideoBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelventVideoBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelventVideoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
