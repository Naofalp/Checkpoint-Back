import CountryEntity from "../entities/country.entity";
import datasource from "../lib/datasource";
import { CreateCountryInput } from "../types/country.types";

export default class CountryService {
    private readonly countryRepository = datasource.getRepository(CountryEntity)

    async listCountries(): Promise<CountryEntity[]> {
        return await this.countryRepository.find();
    }

    async findCountryByCode(countryCode: string): Promise<CountryEntity | null> {
        return await this.countryRepository.findOneBy({ countryCode });
    }

    async findCountriesByContinent(continentCode: string): Promise<CountryEntity[]> {
        return await this.countryRepository.find({where: { continentCode : continentCode }});
    }

    async createCountry(infos: CreateCountryInput): Promise<CountryEntity> {
        const countryData = {
            ...infos
        }

        const newCountry = this.countryRepository.create(countryData);
        return await this.countryRepository.save(newCountry);
    }
}