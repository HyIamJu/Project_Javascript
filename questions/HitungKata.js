/**
 * Buatlah sebuah fungsi Javascript yang bernama hitungKata($kalimat) yang akan menerima satu parameter berupa string $kalimat. 
 * Fungsi ini harus mengembalikan jumlah kata dalam kalimat tersebut. 
 * Kata-kata dalam kalimat akan dipisahkan oleh spasi.
 * Contoh:
 * Input: "Halo nama saya Galih"
 * Output: 4
 */

function hitungKata(kalimat) {
    // Menghapus spasi berlebihan dan karakter whitespace di awal dan akhir kalimat
    kalimat = kalimat.trim().replace(/\s+/g, ' ');

    // Memecah kalimat menjadi array berdasarkan spasi
    const kataKata = kalimat.split(' ');

    // Inisialisasi jumlah kata
    let jumlahKata = 0;

    // Menghitung jumlah kata dengan memeriksa setiap kata
    for (const kata of kataKata) {
        // Hanya menambah jumlah kata jika kata tersebut tidak kosong
        if (kata.trim() !== '') {
            jumlahKata++;
        }
    }

    return jumlahKata;
}

module.exports = { hitungKata };
