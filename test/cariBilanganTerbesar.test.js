const assert = require('assert');
const cariBilanganTerbesar = require('../questions/cariBilanganTerbesar');

// ! Cara run javascript test: npx mocha test/cariBilanganTerbesar.test.js

describe('CariBilanganTerbesar', function () {
    it('Test case 1: Array dengan bilangan terbesar di tengah', function () {
        const array1 = [5, 2, 8, 1, 6];
        const hasil1 = cariBilanganTerbesar(array1);
        assert.strictEqual(hasil1, 8);
    });

    it('Test case 2: Array dengan bilangan terbesar di awal', function () {
        const array2 = [10, 3, 5, 7];
        const hasil2 = cariBilanganTerbesar(array2);
        assert.strictEqual(hasil2, 10);
    });

    it('Test case 3: Array dengan bilangan terbesar di akhir', function () {
        const array3 = [10, 20, 30, 40];
        const hasil3 = cariBilanganTerbesar(array3);
        assert.strictEqual(hasil3, 40);
    });
});

/**
    Jika Anda menjalankan unit test yang disediakan, maka Anda akan mendapatkan hasil berikut:
    Test case 1: Array dengan bilangan terbesar di tengah
    Hasil yang diharapkan: 8
    Test case 2: Array dengan bilangan terbesar di awal
    Hasil yang diharapkan: 10
    Test case 3: Array dengan bilangan terbesar di akhir
    Hasil yang diharapkan: 40
 */