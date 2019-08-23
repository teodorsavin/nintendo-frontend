import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameVotesComponent } from './game-votes.component';

describe('GameVotesComponent', () => {
  let component: GameVotesComponent;
  let fixture: ComponentFixture<GameVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
