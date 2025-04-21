import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatICanDoComponent } from './what-i-can-do.component';

describe('WhatICanDoComponent', () => {
  let component: WhatICanDoComponent;
  let fixture: ComponentFixture<WhatICanDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatICanDoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatICanDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
