import styles from "../styles/Header.module.css";

function Header() {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <header style={headerStyle} className={styles.header}>
      <h1>Todos</h1>
      <p>Items will persist in localStorage</p>
    </header>
  );
}

export default Header