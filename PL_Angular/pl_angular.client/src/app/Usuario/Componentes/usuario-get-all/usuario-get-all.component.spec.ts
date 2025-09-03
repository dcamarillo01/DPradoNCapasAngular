import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioGetAllComponent } from './usuario-get-all.component';

describe('UsuarioGetAllComponent', () => {
  let component: UsuarioGetAllComponent;
  let fixture: ComponentFixture<UsuarioGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioGetAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
