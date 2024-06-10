// src/declarations/connect-history-api-fallback.d.ts
declare module 'connect-history-api-fallback' {
  import { RequestHandler } from 'express';

  interface Options {
    disableDotRule?: boolean;
    htmlAcceptHeaders?: string[];
  }

  function historyApiFallback(options?: Options): RequestHandler;

  export default historyApiFallback;
}
