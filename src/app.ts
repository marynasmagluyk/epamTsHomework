import { createCustomer, getBooksByCategoryPromise, logSearchResults, printRefBook, purge } from './functions';
import RefBook from './classes/encyclopedia';
import { Library, Shelf, UL } from './classes/index';
import { Book, Magazine } from './interfaces';
import { Category } from './enums';
import { BookRequiredFields, CreateCustomerFunctionType, UpdateBook } from './types';


// showHello('greeting', 'TypeScript');
//
// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt.innerText = `Hello from ${name}`;
// }

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged(reason: string): void {
//         console.log(`Damaged: ${reason}`);
//     }
// };
// getProperty(myBook,'title');
// getProperty(myBook, 'markDamaged');
// getProperty(myBook,isbn);

// TASK 06.03
printRefBook(new RefBook(1, 'title', 2023, 2));
printRefBook(new UL.UniversityLibrarian());


// TASK 06.05
const flag = false;

if (flag) {
    import('./classes').then(obj => {
        const reader = new obj.Reader();
        reader.name = 'Anna';
        console.log(reader);
    }).catch(e => console.log(e));
}

if (!flag) {
    const obj = await import('./classes');
    const reader = new obj.Reader();
    reader.name = 'Anna';
    console.log(reader);
}

// TASK 06.06
// let lib: Library = new Library();
let lib: Library = {
    name: 'Anna',
    id: 1,
    address: ''
};

// TASK 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

const r: Book[] = purge(inventory);

// TASK 07.02
const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magShelf = new Shelf<Magazine>();
magazines.forEach(mag => magShelf.add(mag));
console.log(magShelf.getFirst());

// Task 07.04

const BookRequiredFields: BookRequiredFields = {
    id: 1,
    author: 'Anna',
    available: false,
    category: Category.Angular,
    markDamaged: null,
    pages: 200,
    title: 'Unknown'
};

const updateBook: UpdateBook = {
    id: 1,
};

let params: Parameters<CreateCustomerFunctionType>;
params = ['Anna', 30];
createCustomer(...params);

// TASK 08.01-6
// const ul = new UniversityLibrarian();
// Object.getPrototypeOf(ul)['b'] = 123;
// console.log(ul);
// ul.name = 'Anna';
// ul['printLibrarian']();

// (ul as UL.UniversityLibrarian & pl).printLibrarian();
// type pl = { printLibrarian: () => void };
//
// Object.getPrototypeOf(ul).assistFaculty = null;
// Object.getPrototypeOf(ul).teachCommunity = null;
//
// const ref = new RefBook(1, 'TS', 2023, 2);
// ref.printItem();

// const ul = new UniversityLibrarian();
// ul.name = 'Anna';
// ul.assistCustomer('Boris', 'Learn TS');

// TASK 08.07
// const ref = new RefBook(1, 'TypeScript', 2023, 2);
// ref.copies = 10.5;
// console.log(ref);

// TASK 09.01
// getBooksByCategory(Category.JavaScript, logCategorySearch);

// TASK 09.02
// console.log('begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length + 1);
//     }).then(len => console.log(len))
//     .catch(reason => console.log(reason));
//
// console.log('end');

// TASK 09.03
// console.log('begin');
// logSearchResults(Category.JavaScript)
//     .catch(err => console.log(err));
// console.log('end');



