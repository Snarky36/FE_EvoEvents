import { CityEnum } from '../enums/CityEnum';
import { CountryEnum } from '../enums/CountryEnum';

export default interface Address {
  readonly country: number;
  readonly city: number;
  readonly location: string;
}
