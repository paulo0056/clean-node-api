export class InvalidParamError extends Error {
  constructor(paramName: string) {
    //classes que herdam de erro no typescript precisa ser super
    super(`Missing param: ${paramName}`);
    this.name = "InvalidParamError";
  }
}
