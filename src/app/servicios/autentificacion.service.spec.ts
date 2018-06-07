import { TestBed, inject } from '@angular/core/testing';

import { AutentificacionService } from './autentificacion.service';


describe('AutentificacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutentificacionService]
    });
  });

  it('should be created', inject([AutentificacionService], (service: AutentificacionService) => {
    expect(service).toBeTruthy();
  }));
});
