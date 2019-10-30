import { TestBed } from '@angular/core/testing';

import { GetReportService } from './get-report.service';

describe('GetReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetReportService = TestBed.get(GetReportService);
    expect(service).toBeTruthy();
  });
});
