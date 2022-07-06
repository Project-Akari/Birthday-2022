import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsLoaderComponent } from './assets-loader.component';

describe('AssetsLoaderComponent', () => {
  let component: AssetsLoaderComponent;
  let fixture: ComponentFixture<AssetsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
