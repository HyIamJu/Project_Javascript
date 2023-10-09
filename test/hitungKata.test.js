const { hitungKata } = require('../questions/HitungKata'); // Sesuaikan dengan path yang benar

const assert = require('assert');

// ! Cara run javascript test: npx mocha test/hitungKata.test.js

describe('HitungKata', function () {
    it('Test case 1: Kalimat kosong', function () {
        const hasil = hitungKata('');
        assert.strictEqual(hasil, 0);
    });

    it('Test case 2: Kalimat dengan satu kata', function () {
        const hasil = hitungKata('Halo');
        assert.strictEqual(hasil, 1);
    });

    it('Test case 3: Kalimat dengan beberapa kata', function () {
        const hasil = hitungKata('Halo nama saya Galih');
        assert.strictEqual(hasil, 4);
    });

    it('Test case 4: Kalimat dengan karakter khusus', function () {
        const hasil = hitungKata('Ini, kalimat dengan tanda baca!');
        assert.strictEqual(hasil, 5);
    });

    it('Test case 5: Kalimat dengan spasi ganda', function () {
        const hasil = hitungKata('Ini   kalimat   dengan   spasi   ganda');
        assert.strictEqual(hasil, 5);
    });
});

/**
 * Jika Anda menjalankan unit test yang disediakan, maka Anda akan mendapatkan hasil berikut:
    Test case 1: Kalimat kosong
    Hasil yang diharapkan: 0
    Test case 2: Kalimat dengan satu kata
    Hasil yang diharapkan: 1
    Test case 3: Kalimat dengan beberapa kata
    Hasil yang diharapkan: 4
    Test case 4: Kalimat dengan karakter khusus
    Hasil yang diharapkan: 5
    Test case 5: Kalimat dengan spasi ganda
    Hasil yang diharapkan: 5
 */