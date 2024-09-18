import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEventoComponent } from './detalhes-evento.component';

describe('DetalhesEventoComponent', () => {
  let component: DetalhesEventoComponent;
  let fixture: ComponentFixture<DetalhesEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesEventoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
