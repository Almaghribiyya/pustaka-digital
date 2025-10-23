const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Mendefinisikan model 'User'
const User = sequelize.define('User', {
  // Sequelize secara otomatis membuat 'id' sebagai primary key
  username: {
    type: DataTypes.STRING,
    allowNull: false, // Tidak boleh kosong
    unique: true      // Harus unik
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true   // Validasi format email
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
  // Kolom createdAt dan updatedAt dibuat otomatis oleh Sequelize
}, {
  // Opsi tambahan model
  tableName: 'Users' // Nama tabel di database
});

module.exports = User;