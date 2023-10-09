/**
 * Buatlah sebuah fungsi Javascript yang menerima sebuah array bilangan bulat dan mengembalikan bilangan terbesar dalam array tersebut.
 * Contoh:
 * Input: [5, 8, 2, 10, 3]
 * Output: 10
 */

function cariBilanganTerbesar(array) {
    let terbesar = array[0];
    for (let i = 0; i < array.length; i++) {
        const bilangan = array[i];
        if (bilangan > terbesar) {
            terbesar = bilangan;
        }
    }
    return terbesar;
}

module.exports = cariBilanganTerbesar;
