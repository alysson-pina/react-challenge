import users from './mockData/users';
import planets from './mockData/planets';
import transactions from './mockData/transactions';

export type Object = {
  [key: string]: string | string[] | number;
}

type ArrayElement<ArrayType extends readonly Object[]> = 
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type PlanetType = ArrayElement<typeof planets>;

export type PlanetsApiResponse = {
  planets: PlanetType[];
}

export type UserType = ArrayElement<typeof users>;

export type UsersApiResponse = {
  users: UserType[];
}

export type TransactionType = ArrayElement<typeof transactions>;

export type TransactionsApiResponse = {
  transactions: TransactionType[];
}

export interface ExchangeRate {
  rate: string;
}
