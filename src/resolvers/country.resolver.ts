import { Arg, Mutation, Query, Resolver } from "type-graphql";
import CountryEntity from "../entities/country.entity";
import { CreateCountryInput } from "../types/country.types";
import CountryService from "../services/country.service";

@Resolver()
export default class Countryresolver {
    @Query(()=> [CountryEntity])
    async listCountries(){
    const countryService = new CountryService();
    return await countryService.listCountries();
  }

  @Query(() => CountryEntity)
  async findCountry(@Arg("countryCode") countryCode: string) {
    const countryService = new CountryService();
    return await countryService.findCountryByCode(countryCode);
  }

  @Query(() => [CountryEntity])
  async findCountriesByContinent(@Arg("continentCode") continentCode: string){
    const countryService = new CountryService();
    return await countryService.findCountriesByContinent(continentCode);
  }


@Mutation(() => CountryEntity)
  async createCountry(@Arg("infos") infos: CreateCountryInput) {
    const countryService = new CountryService();
    return await countryService.createCountry(infos);
  }
}