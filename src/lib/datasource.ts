import { DataSource } from "typeorm";
import CountryEntity from "../entities/country.entity";

const datasource = new DataSource({
    type: "sqlite",
    database: "checkpoint.sqlite",
    entities: [
        CountryEntity,
    ],
    synchronize: true,
    logging: ["error", "query"],
});
export default datasource;