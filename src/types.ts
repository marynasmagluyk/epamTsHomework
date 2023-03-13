import { Author, Book, Person } from './interfaces';
import { createCustomer, getBooksByCategoryPromise } from './functions';

export type BookOrUndefined = Book | undefined;
export type BookProperties = keyof Book;
export type PersonBook = Book & Person;

// Task 07.04
export type BookRequiredFields = Required<Book>;
export type UpdateBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type CreateCustomerFunctionType = typeof createCustomer;

// Task 07.05
export type fn = (a: string, b: number, c: boolean) => symbol;
export type Param1<T> = T extends (a: infer U, b: number, c: boolean) => symbol ? U : never;
export type Param2<T> = T extends (a: string, b: infer U, c: boolean) => symbol ? U : never;
export type Param3<T> = T extends (a: string, b: number, c: infer U) => symbol ? U : never;

export type P1 = Param1<fn>;
export type P2 = Param2<fn>;
export type P3 = Param3<fn>;

export type RequiredProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? never : prop
}[keyof T];

export type OptionalProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? prop : never
}[keyof T];

type BookRequiredProps = RequiredProps<Book>;
type BookOptionalProps = OptionalProps<Book>;

type RemoveProps<T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
};

type BookRequiredPropsType = RemoveProps<Author, BookOptionalProps>;
type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;

type Unpromisify<T> = T extends Promise<infer R> ? R : never;

type F = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;
















