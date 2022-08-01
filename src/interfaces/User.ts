export default interface User {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly company?: string;
  readonly password?: string;
}

export const emptyUser: User = { firstName: 'Farcas', lastName: 'Iulia' };
