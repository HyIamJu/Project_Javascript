/**
 * Buatlah sebuah fungsi Javascript yang menerima sebuah array nilai numerik dan menghitung rata-rata nilai dari array tersebut.
 * Contoh:
 * Input: [80, 90, 75, 60, 85]
 * Output: 78
 */

function hitungRataRata(nilai) {
    const total = nilai.reduce((acc, curr) => acc + curr, 0);
    const jumlah = nilai.length;

    if (jumlah > 0) {
        return Math.round(total / jumlah);
    } else {
        return 0;
    }
}

module.exports = { hitungRataRata };
