import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { Request, Response } from 'express';

export interface Context {
  req: Request;
  res: Response;
}

export async function createContext(
  request: ExpressContext
): Promise<Partial<Context>> {
  return {
    ...request,
    res: request.res,
    req: request.req,
  };
}
