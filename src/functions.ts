import { Author, Book, Callback, LibMgrCallback, Librarian, Logger, TOptions } from './interfaces';
import { Category } from './enums';
import { BookOrUndefined, BookProperties, PersonBook } from './types';
import { RefBook } from './classes';

// TASK 01.01
export const getAllBooks = (): readonly Book[] => {
    const books: readonly Book[] = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: false,
            category: Category.JavaScript,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript,
        },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript,
        },
    ];
    return books;
};

export const logFirstAvailable = (books: readonly Book[] = getAllBooks()): void | undefined => {
    console.log(books.length);
    console.log(books.find(book => book.available)?.title);
};
// logFirstAvailable();

export const getBookTitlesByCategory = (needCategory: Category = Category.JavaScript): string[] => {
    const books = getAllBooks();
    return books
        .filter(({ category }) => category === needCategory)
        .map(({ title }) => title);
};
// getBookTitlesByCategory(Category.JavaScript);

export const logBookTitles = (arrayString: string[]): void => {
    console.log(arrayString);
};
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

export const getBookAuthorByIndex = (index: number): [title: string, author: string] | undefined => {
    const books = getAllBooks();
    const founded = books[index];

    if (!founded) return undefined;

    const { author, title } = founded;
    return [`title: ${title}`, `author: ${author}`];
};
// getBookAuthorByIndex(3);

export const calcTotalPages = (): bigint => {
    const libraries = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    return libraries.reduce(
        (acc, { books, avgPagesPerBook }) => {
            return acc + (BigInt(books) * BigInt(avgPagesPerBook));
        }
        , BigInt(0));
};
// calcTotalPages();

// TASK 02.02 <const> type assertion added for getAllBooks, logFirstAvailable, calcTotalPages arguments.
// TASK 03.01
export const createCustomerID = (name: string, id: number): string => {
    return `Name: ${name} ID: ${id}`;
};
const myId: string = createCustomerID('Ann', 10);
// let a: typeof createCustomerID();

// TASK 03.02
let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `Name: ${name} ID: ${id}`;
idGenerator('Ann', 10);

export const createCustomer = (name: string, age?: number, city?: string) => {
    if (age) {
        return `${age}`;
    }
    if (city) {
        return `${city}`;
    }
    return `${name}`;
};

createCustomer('mary');
createCustomer('mary', 10);
createCustomer('mary', 10, 'Wroclaw');

export const getBookByID = (id: Book['id']): BookOrUndefined => {
    const books = getAllBooks();

    return books.find(({ id }) => id === id);
};
getBookByID(1);

export const checkoutBooks = (customer: string, ...bookIDs: number[]): string[] => {

    return bookIDs
        .map((id) => getBookByID(id))
        .filter(({ available }) => available)
        .map(({ title }) => title);

};
checkoutBooks('Ann', 1, 2, 3);


// TASK 03.03
export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];

export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books
                .filter(({ author }) => author === arg)
                .map(({ title }) => title);
        } else if (typeof arg === 'boolean') {
            return books
                .filter(({ available }) => available === arg)
                .map(({ title }) => title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books
                .filter((book) => book.id === id && book.available === available)
                .map(({ title }) => title);
        }
    }
}

getTitles(1, true);

// TASK 03.04
export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should be a string');
    }
}

export function bookTitleTransform(name: any): string {
    assertStringValue(name);
    return [...name].reverse().join('');
}

bookTitleTransform('TypeScript');

// TASK 04.01
export const printBook = (book: Book): void => {
    console.log(`${book.title} by ${book.author}`);
};

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged(reason: string): void {
        console.log(`Damaged: ${reason}`);
    },
};

myBook.markDamaged('missing back over');

// TASK 04.02

export const logDamage: Logger = (reason: string): void => {
    console.log(reason);
};
logDamage('reason');

// TASK 04.03

const favouriteAuthor: Author = {
    name: 'Joe Biden',
    email: 'potus.gmail.com',
    numBooksPublished: 20,
};

const favoriteLibrarian: Librarian = {
    name: 'Joe Biden',
    email: 'potus.gmail.com',
    department: 'NY',
    assistCustomer: (custName, bookTitle) => {
        console.log(custName + bookTitle);
    },
};

// TASK 04.04
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};
// console.log(offer?.magazine);
// console.log(offer?.magazine?.getTitle());
// console.log(offer?.book?.getTitle());
// console.log(offer?.book?.authors[0]);

// TASK 04.05
export function getProperty(book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return console.log(book[prop]);
    }
    console.log(book[prop]);
}

// TASK 05.05
const personBook: PersonBook = {
    author: 'Anna',
    available: true,
    category: Category.Angular,
    email: 'ada.com',
    id: 1,
    name: 'Anna',
    title: 'unknown',
};

export function setDefConfig(options: TOptions): TOptions {
    options.duration ??= 200;
    options.speed ??= 90;
    return options;
}

// TASK 06.03
export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('Not instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

// TASK 07.03
export function getObjectProperty<TObject, Tkey extends keyof TObject>(obj: TObject, prop: Tkey): TObject[Tkey] | string {
    const value = obj[prop];
    return typeof value === 'function' ? value.name : value;
}

// TASK 09.01
export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        });
    });
}

export async function logSearchResults(category: Category) {
    const results: Awaited<Promise<string[]>> = await getBooksByCategoryPromise(category);
    console.log(results);
}

// --------------------------------
// export type P1 = Param1<fn>;
// export type P2 = Param2<fn>;
// export type P3 = Param3<fn>;

// export type RequiredlProps<T extends object> = {
//     [prop in keyof T]: {} extends Pick<T, prop> ? never : prop
// }[keyof T];

// export type OptionalProps<T extends object> = {
//     [prop in keyof T]: {} extends Pick<T, prop> ? prop : never
// }[keyof T];

// type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
// type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;




