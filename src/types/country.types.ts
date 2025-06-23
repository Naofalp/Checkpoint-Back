import { Field, InputType } from "type-graphql";

@InputType()
export class CreateCountryInput {
  @Field()
  countryCode!: string;

  @Field()
  name!: string;

  @Field()
  flag!: string;

  @Field()
  continentCode!: string;
}