// TASK 06.01
namespace Utility {
    export function maxBooksAllowed(age: number): number {
        return age < 12 ? 3 : 10;
    }

    export namespace Fees {
        export function calculateFee(daysLate: number): number {
            return daysLate * 0.25;
        }
    }

    function privateFunc(): void {
        console.log('Private function');
    }
}
