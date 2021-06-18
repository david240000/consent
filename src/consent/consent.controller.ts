import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ConsentService } from './consent.service';
import { Consents } from './consents.entity';

@Crud({
    model:{
        type:Consents
    }
})
@Controller('consent')
export class ConsentController implements CrudController<Consents> {
    
    constructor(public service: ConsentService){}
}
