import { TestBed } from '@angular/core/testing';

import { LeaderService } from './services/leader.service';

describe('LeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaderService = TestBed.get(LeaderService);
    expect(service).toBeTruthy();
  });
});
