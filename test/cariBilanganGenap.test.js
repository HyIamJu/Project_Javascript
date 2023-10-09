const assert = require('assert');
const cariBilanganGenap = require('../questions/CariBilanganGenap');

// ! Cara run javascript test: npx mocha test/cariBilanganGenap.test.js

describe('CariBilanganGenap', function () {
    it('Test case 1: Array dengan beberapa bilangan genap', function () {
        const array1 = [5, 2, 8, 1, 6];
        const hasil1 = cariBilanganGenap(array1);
        assert.deepStrictEqual(hasil1, [2, 8, 6]);
    });

    it('Test case 2: Array tanpa bilangan genap', function () {
        const array2 = [1, 3, 5, 7];
        const hasil2 = cariBilanganGenap(array2);
        assert.deepStrictEqual(hasil2, []);
    });

    it('Test case 3: Array dengan semua bilangan genap', function () {
        const array3 = [10, 20, 30, 40];
        const hasil3 = cariBilanganGenap(array3);
        assert.deepStrictEqual(hasil3, [10, 20, 30, 40]);
    });
});

/*
    Jika Anda menjalankan unit test yang disediakan, maka Anda akan mendapatkan hasil berikut:
    Test case 1: Array dengan beberapa bilangan genap
    Hasil yang diharapkan: [2,8,6]
    Test case 2: Array tanpa bilangan genap
    Hasil yang diharapkan: []
    Test case 3: Array dengan semua bilangan genap
    Hasil yang diharapkan: [10, 20, 30, 40]
**/
