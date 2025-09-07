create database personal_records;
use personal_records;

CREATE TABLE profiles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(50),
    tinggi_badan INT,
    tanggal DATE,
    gambar_path VARCHAR(255)
);

select * from profiles