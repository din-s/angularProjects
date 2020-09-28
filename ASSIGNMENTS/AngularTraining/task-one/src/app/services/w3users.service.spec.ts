import { TestBed } from '@angular/core/testing';

import { W3usersService } from './w3users.service';

describe('W3usersService', () => {
  let service: W3usersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(W3usersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
