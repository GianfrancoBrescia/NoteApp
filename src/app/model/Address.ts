export class Address {

    city: undefined | null | string;
    street: undefined | null | string;

    constructor(city: undefined | null | string, street: undefined | null | string) {
        this.city = city;
        this.street = street;
    }
}
