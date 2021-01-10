import { TestBed } from '@angular/core/testing';

import { ChangeResponseService } from './select-response.service';

describe('ChangeSceneService', () => {
  let service: ChangeResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
