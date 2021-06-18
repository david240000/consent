import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Consents } from './consents.entity';

@Injectable()
export class ConsentService extends TypeOrmCrudService<Consents>{
    
    constructor(@InjectRepository(Consents) repository){
        super(repository);
    }
}
