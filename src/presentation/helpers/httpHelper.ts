import { HttpResponse } from "../protocols/http";
// colocar parenteses num objeto vindo de uma função significa que o conteudo é um return
export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});
