import { Types } from 'mongoose';

export type Extract<T> = T extends { definition: infer U } ? U : never;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ExcludeFromArray<T> = T extends Array<infer U>
  ? Array<Exclude<U, string | number | Types.ObjectId>>
  : T;

export type PopulateItem<T, P extends keyof T> = Omit<T, P> &
  { [x in P]: ExcludeFromArray<T[x]> };

export type GetArrayItem<T> = T extends Array<infer U> ? U : never;

export type PopulateArray<T, P extends keyof GetArrayItem<T>> = Array<
  PopulateItem<GetArrayItem<T>, P>
>;

export type MaybeItem<T> = T extends Array<infer U> ? U : T;

export type Populate<T, P> = T extends Array<infer U>
  ? P extends keyof U
    ? Array<PopulateItem<U, P>>
    : T
  : P extends keyof T
  ? PopulateItem<T, P>
  : T;
