import { TestBed } from '@angular/core/testing';

import { ChangeSceneService } from './change-scene.service';

describe('ChangeSceneService', () => {
  let service: ChangeSceneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeSceneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
