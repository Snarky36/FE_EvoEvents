import { CityEnum } from "../enums/CityEnum";
import { CountryEnum } from "../enums/CountryEnum";

export default interface Address {
  readonly city: CityEnum;
  readonly country: CountryEnum;
  readonly location?: string;
}