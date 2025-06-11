import Image from 'next/image';
import '../styles/home.css';

export default function Home() {
  return (
    <main>

      {/* 1. Hero Section */}
      <section className="hero">
        <h1>Kembara Impian Anda Bermula di Sini</h1>
        <p>
          Pakej pelancongan yang tersusun, selamat & penuh pengalaman bermakna.
        </p>
        <a href="/pakej">Lihat Pakej</a>
      </section>

      {/* 2. Kenapa Pilih AQ */}
      <section className="section">
        <h2>Kenapa Pilih AQ Travel?</h2>
        <ul>
          <li>✅ Berdaftar & dipercayai</li>
          <li>✅ Pengurusan profesional</li>
          <li>✅ Jadual fleksibel & mesra pelanggan</li>
          <li>✅ Harga telus, tiada caj tersembunyi</li>
        </ul>
      </section>

      {/* 3. Senarai Pakej */}
      <section className="section">
        <h2>Pakej Pilihan</h2>
        <div>
          <div>
            <Image src="/images/galeri-1.jpg" width={300} height={200} alt="Pakej A" />
            <h4>Phuket 3H2M</h4>
            <p>Dari RM899/pax</p>
          </div>
          <div>
            <Image src="/images/galeri-2.jpg" width={300} height={200} alt="Pakej B" />
            <h4>Langkawi 4H3M</h4>
            <p>Dari RM699/pax</p>
          </div>
        </div>
      </section>

      {/* 4. Cara Tempahan */}
      <section className="section">
        <h2>Cara Tempahan</h2>
        <ol>
          <li>Pilih pakej</li>
          <li>Isi maklumat</li>
          <li>Buat bayaran</li>
          <li>Terima pengesahan</li>
        </ol>
      </section>

      {/* 5. Testimoni */}
      <section className="section testimoni">
        <h2>Apa Kata Pelanggan?</h2>
        <blockquote>
          “Terbaik! Pengurusan AQ Travel sangat profesional dan mesra. Perjalanan saya ke Bali sangat lancar.”
          <br />– Nur Aina, Selangor
        </blockquote>
      </section>

      {/* 6. Galeri */}
      <section className="section galeri">
        <h2>Galeri Perjalanan</h2>
        <div>
          <Image src="/images/hero.jpg" width={250} height={160} alt="Destinasi 1" />
          <Image src="/images/galeri-1.jpg" width={250} height={160} alt="Destinasi 2" />
        </div>
      </section>

      {/* 7. Tentang Kami */}
      <section className="section">
        <h2>Tentang AQ Travel</h2>
        <p>
          AQ Travel ialah agensi pelancongan berlesen, berpengalaman lebih 5 tahun dalam menganjurkan pakej domestik & antarabangsa.
        </p>
      </section>

      {/* 8. CTA Sekunder */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h3>Berminat untuk tempah sekarang?</h3>
        <a href="https://wa.me/60189067569" className="cta-btn">
          WhatsApp Sekarang
        </a>
      </section>

      {/* 9. FAQ */}
      <section className="section">
        <h2>Soalan Lazim</h2>
        <p><strong>Q:</strong> Boleh bayar ansuran?</p>
        <p><strong>A:</strong> Ya, kami ada pilihan deposit awal.</p>
      </section>

      {/* 10. Footer */}
      <footer className="footer">
        <p>© 2025 AQ Travel & Tours. Semua Hak Terpelihara.</p>
        <p>Email: aqttsb23@gmail.com | Phone: 018-9067569</p>
      </footer>

    </main>
  );
}
