import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSecComponent } from './comment-sec.component';

describe('CommentSecComponent', () => {
  let component: CommentSecComponent;
  let fixture: ComponentFixture<CommentSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
