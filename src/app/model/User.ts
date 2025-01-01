import {Address} from "./Address";

export class User {

  firstname: undefined | null | string;
  lastname: undefined | null | string;
  age: undefined | null | number;
  email: undefined | null | string;
  address: undefined | null | Address;
  visibility: undefined | null | boolean;
  birthdate: undefined | null | Date;

  constructor(firstname: undefined | null | string, lastname: undefined | null | string, age: undefined | null | number,
              email: undefined | null | string, address: undefined | null | Address, visibility: undefined | null | boolean,
              birthdate: undefined | null | Date) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
    if (address != null) this.address = new Address(address.city, address.street);
    this.visibility = visibility;
    this.birthdate = birthdate;
  }

  public static empty(): User {
    return new User(null, null, null, null, new Address(null, null), false, null);
  }
}
