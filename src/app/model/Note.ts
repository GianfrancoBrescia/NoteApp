export class Note {
  
  userId: undefined | null | number;
  id: undefined | null |  number;
  title: undefined | null | string;
  body: undefined | null | string;

  constructor(userId: undefined | null | number, id: undefined | null | number, title: undefined | null | string,
              body: undefined | null | string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }

  public static empty(): Note {
    return new Note(null, null, null, null);
  }
}
