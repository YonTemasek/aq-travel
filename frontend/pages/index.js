export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', color: '#9FB3DF' }}>Selamat Datang ke AQ Travel</h1>
      <p style={{ marginTop: '1rem' }}>
        Kami menyediakan pakej pelancongan tempatan & antarabangsa khas untuk anda. Tempah perjalanan anda hari ini dengan jaminan servis terbaik!
      </p>
      <a
        href="/pakej"
        style={{
          display: 'inline-block',
          marginTop: '1.5rem',
          padding: '0.75rem 1.25rem',
          backgroundColor: '#9EC6F3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        Lihat Pakej
      </a>
    </main>
  );
}
