import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ConsentService } from './consent.service';
import { Consents } from './consents.entity'
import { MockRepository } from './mockrepository';

describe('ConsentService', () => {
  let service: ConsentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsentService, {
        provide: getRepositoryToken(Consents),
        useClass: MockRepository,
      },],
    }).compile();

    service = module.get<ConsentService>(ConsentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
