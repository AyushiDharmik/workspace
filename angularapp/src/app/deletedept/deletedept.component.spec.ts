import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedeptComponent } from './deletedept.component';

describe('DeletedeptComponent', () => {
  let component: DeletedeptComponent;
  let fixture: ComponentFixture<DeletedeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
