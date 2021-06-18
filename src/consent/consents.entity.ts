import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Consents{
    @PrimaryGeneratedColumn()
    id:number;

    @Column('boolean')
    storeAndOrAccessInformationOnADevice: boolean;

    @Column('boolean')
    selectBasicAds: boolean;

    @Column('boolean')
    createPersonalizedAdsProfile: boolean;

    @Column('boolean')
    selectPersonalizedAds: boolean;

    @Column('boolean')
    selectPersonalizedContemtProfile: boolean;
}