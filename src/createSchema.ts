import { SchemaOptions, Schema } from 'mongoose';

type CreateSchema = <T extends { [x: string]: any }>(
  definition?: T,
  options?: SchemaOptions
) => Schema & { definition: T };

export const createSchema: CreateSchema = (definition?, options?) => {
  return new Schema(definition, options) as any;
};
