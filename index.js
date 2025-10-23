const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./config/database'); // Impor koneksi database
const User = require('./models/User');

// Memuat konfigurasi .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Mengizinkan Cross-Origin Resource Sharing
app.use(express.json()); // Mem-parsing body request sebagai JSON

// Rute Tes Sederhana
app.get('/', (req, res) => {
  res.send('Selamat Datang di API Pustaka Digital!');
});

// Fungsi untuk memulai server dan menguji database
const startServer = async () => {
  try {
    // Menguji koneksi database
    await sequelize.authenticate();
    console.log('Koneksi database MySQL berhasil.');

    await sequelize.sync();
    console.log('Semua model telah disinkronkan.');

    // Menjalankan server Express
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Koneksi database gagal:', error);
  }
};

// Memulai server
startServer();