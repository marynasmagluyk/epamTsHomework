// TASK 06.01
var Utility;
(function (Utility) {
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    var Fees;
    (function (Fees) {
        function calculateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateFee = calculateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function privateFunc() {
        console.log('Private function');
    }
})(Utility || (Utility = {}));
/// <reference path="utils.ts"/>
var result1 = Utility.maxBooksAllowed(15);
console.log(result1);
var util = Utility.Fees;
var res2 = util.calculateFee(30);
console.log(res2);
