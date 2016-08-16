/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FuelTypeServiceService } from './fuel-type-service.service';

describe('Service: FuelTypeService', () => {
  beforeEach(() => {
    addProviders([FuelTypeServiceService]);
  });

  it('should ...',
    inject([FuelTypeServiceService],
      (service: FuelTypeServiceService) => {
        expect(service).toBeTruthy();
      }));
});
