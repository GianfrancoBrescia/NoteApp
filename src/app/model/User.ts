import {Address} from "./Address";

export class User {

  codiceFiscale: undefined | null | string;
  firstname: undefined | null | string;
  lastname: undefined | null | string;
  age: undefined | null | number;
  email: undefined | null | string;
  address: undefined | null | Address[];
  visibility: undefined | null | boolean;
  birthdate: undefined | null | Date;

  constructor(codiceFiscale: undefined | null | string, firstname: undefined | null | string, lastname: undefined | null | string,
              age: undefined | null | number, email: undefined | null | string, address: undefined | null | Address[],
              visibility: undefined | null | boolean, birthdate: undefined | null | Date) {
    this.codiceFiscale = codiceFiscale;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
    this.address = address;
    this.visibility = visibility;
    this.birthdate = birthdate;
  }

  public static empty(visibility: boolean = false): User {
    return new User(null, null, null, null, null, null, visibility, null);
  }
}
