export default function Footer() {
  return (
    <footer style={{
      padding: '4rem var(--spacing-x)',
      borderTop: '1px solid rgba(0,0,0,0.1)',
      backgroundColor: 'var(--bg-color)',
      color: 'rgba(0,0,0,0.5)',
      fontSize: '0.9rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <p style={{ margin: 0 }}>I turn complex logic into robust software</p>
      <p style={{ margin: 0 }}>Designed and developed by me</p>
    </footer>
  );
}
