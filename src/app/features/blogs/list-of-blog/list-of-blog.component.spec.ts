import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBlogComponent } from './list-of-blog.component';

describe('ListOfBlogComponent', () => {
  let component: ListOfBlogComponent;
  let fixture: ComponentFixture<ListOfBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
