/* eslint-disable no-redeclare */
import { Librarian } from '../interfaces';
import { format, logger, logMethod, logParameter, sealed, writable } from '../decorators';


@sealed('UniversLibrarian')
@logger
// TASK 05.04
export class UniversityLibrarian implements Librarian {
    @format() name: string;
    email: string;
    department: string;

    constructor() {
        console.log('Native con-r');
    }

    @logMethod
    assistCustomer(@logParameter custName: string, @logParameter bookNumber: number): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }

    @writable(true)
    assistFaculty(): void {
        console.log('Assist faculty');
    }

    @writable(false)
    teachCommunity(): void {
        console.log('Teaching comm');
    }
}

const favouriteLibrarian: Librarian = new UniversityLibrarian();
favouriteLibrarian.name = 'Anna';
favouriteLibrarian.assistCustomer('Boris', 'Learn TS');
