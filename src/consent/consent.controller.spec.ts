import { Test, TestingModule } from '@nestjs/testing';
import { CrudRequest } from '@nestjsx/crud';
import { getConnection } from 'typeorm';
import { ConsentController } from './consent.controller';
import { ConsentService } from './consent.service';
import { Consents } from './consents.entity';

describe('ConsentController', () => {
  let controller: ConsentController;
  const req: CrudRequest = { parsed: null, options: null };
  const dto = {
    storeAndOrAccessInformationOnADevice: true,
    selectBasicAds: true,
    createPersonalizedAdsProfile: true,
    selectPersonalizedAds: true,
    selectPersonalizedContemtProfile: true
  };

  const mockConsentService = {
    createOne: jest.fn((req, dto) => {

      return {
        id: 1,
        ...dto
      };
    }),

    getOne: jest.fn().mockImplementation((req)=>{
      return {
        id: 1,
        ...dto
      };
    }),

    getMany: jest.fn().mockImplementation(req =>{
      return [{
        id: 1,
        ...dto
      }];
    }),

    updateOne: jest.fn().mockImplementation((req, dto) => {
      return {
        id: 1,
        ...dto
      };
    }),

    deleteOne: jest.fn().mockImplementation(req => {
      return {
        id:1,
        ...dto
      }
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsentController],
      providers: [ConsentService],
    }).overrideProvider(ConsentService).useValue(mockConsentService).compile();

    controller = module.get<ConsentController>(ConsentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a Consent', () => {
    expect(controller.service.createOne(req, dto)).toEqual({
      id: expect.any(Number),
      ...dto
    });

    expect(mockConsentService.createOne).toHaveBeenCalled();
  });

  it('should read a Consent', () =>{
    expect(controller.service.getOne(req)).toEqual({
      id: expect.any(Number),
      ...dto
    });

    expect(mockConsentService.getOne).toHaveBeenCalled();
  });

  it('should read many Consent', () =>{
    expect(controller.service.getMany(req)).toEqual([{
      id: expect.any(Number),
      ...dto
    }]);

    expect(mockConsentService.getMany).toHaveBeenCalled();
  });

  it('should update a Consent', () =>{
    expect(controller.service.updateOne(req, dto)).toEqual({
      id: expect.any(Number),
      ...dto
    });

    expect(mockConsentService.updateOne).toHaveBeenCalled();
  });

  it('should delete a Consent', () =>{
    expect(controller.service.deleteOne(req)).toEqual({
      id: expect.any(Number),
      ...dto
    });

    expect(mockConsentService.deleteOne).toHaveBeenCalled();
  });
  
})
