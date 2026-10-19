import serverlessExpressPkg from '@vendia/serverless-express';
import { app } from './app.js';

const serverlessExpress: any =
  typeof serverlessExpressPkg === 'function'
    ? serverlessExpressPkg
    : (serverlessExpressPkg as any).default || serverlessExpressPkg;

export const handler = serverlessExpress({ app });
