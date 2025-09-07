require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const pool = require("./db"); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
app.use("/uploads", express.static(uploadDir));

// Konfigurasi multer untuk upload file gambar
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

app.post("/api/records", upload.single("gambar"), async (req, res) => {
  try {
    const { nama, tinggi_badan, tanggal } = req.body;
    const gambarPath = "/uploads/" + req.file.filename;

    const [result] = await pool.execute(
      "INSERT INTO profiles (nama, tinggi_badan, tanggal, gambar_path) VALUES (?, ?, ?, ?)",
      [nama, tinggi_badan, tanggal, gambarPath]
    );

    res.json({ message: "Data berhasil disimpan", id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal menyimpan data" });
  }
});

app.get("/api/records", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM profiles");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal mengambil data" });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
