const assert = require('assert');
const { hitungRataRata } = require('../questions/HitungRataRata');

// ! Cara run javascript test: npx mocha test/hitungRataRata.test.js

describe('HitungRataRata', function () {
    it('Test case 1: Rata-rata dari nilai-nilai', function () {
        const nilai1 = [80, 90, 75, 60, 85];
        const hasil1 = hitungRataRata(nilai1);
        assert.strictEqual(hasil1, 78);
    });

    it('Test case 2: Rata-rata dari nilai-nilai yang sama', function () {
        const nilai2 = [100, 100, 100, 100];
        const hasil2 = hitungRataRata(nilai2);
        assert.strictEqual(hasil2, 100);
    });

    it('Test case 3: Rata-rata dari array kosong', function () {
        const nilai3 = [];
        const hasil3 = hitungRataRata(nilai3);
        assert.strictEqual(hasil3, 0);
    });
});

/**
 * Jika Anda menjalankan unit test yang disediakan, maka Anda akan mendapatkan hasil berikut:
    Test case 1: Rata-rata dari nilai-nilai
    Hasil yang diharapkan: 78
    Test case 2: Rata-rata dari nilai-nilai yang sama
    Hasil yang diharapkan: 100
    Test case 3: Rata-rata dari array kosong
    Hasil yang diharapkan: 0
 */
