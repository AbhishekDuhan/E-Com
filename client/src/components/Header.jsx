import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '10px', background: '#222', color: '#fff' }}>
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
