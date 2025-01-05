export class Note {
  
  userFiscalCode: undefined | null | string;
  id: undefined | null |  number;
  title: undefined | null | string;
  body: undefined | null | string;

  constructor(userFiscalCode: undefined | null | string, id: undefined | null | number, title: undefined | null | string,
              body: undefined | null | string) {
    this.userFiscalCode = userFiscalCode;
    this.id = id;
    this.title = title;
    this.body = body;
  }

  public static empty(): Note {
    return new Note(null, null, null, null);
  }
}
