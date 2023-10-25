import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParaTiPage } from './para-ti.page';

describe('ParaTiPage', () => {
  let component: ParaTiPage;
  let fixture: ComponentFixture<ParaTiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParaTiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
