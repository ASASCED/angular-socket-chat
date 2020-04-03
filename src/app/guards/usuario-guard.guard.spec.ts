import { TestBed, async, inject } from '@angular/core/testing';

import { UsuarioGuardGuard } from './usuario-guard.guard';

describe('UsuarioGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioGuardGuard]
    });
  });

  it('should ...', inject([UsuarioGuardGuard], (guard: UsuarioGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
