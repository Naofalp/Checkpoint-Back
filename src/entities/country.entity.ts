import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity({name: "country"})
export default class CountryEntity{
    @Field(()=>ID)
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column({length:3, nullable: false})
    countryCode: string;

    @Field()
    @Column({length:3, nullable: false})
    continentCode: string;

    @Field()
    @Column({length:30, nullable: false})
    name: string;

    @Field()
    @Column({length:1, nullable: false})
    flag: string;
}