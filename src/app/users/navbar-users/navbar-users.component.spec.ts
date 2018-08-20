import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUsersComponent } from './navbar-users.component';

describe('NavbarUsersComponent', () => {
  let component: NavbarUsersComponent;
  let fixture: ComponentFixture<NavbarUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
