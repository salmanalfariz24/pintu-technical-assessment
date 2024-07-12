export class APIError<T = any> extends Error {
  public payload: T;

  constructor(message: string, payload: any) {
    super(message);

    this.name = 'APIError';
    this.payload = payload;
  }
}
