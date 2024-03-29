export class MissingParamError extends Error {
  constructor(paramName: string) {
    //classes que herdam de erro no typescript precisa ser super
    super(`Missing param: ${paramName}`); // mesma coisa que new Error()
    this.name = "MissingParamError";
  }
}
