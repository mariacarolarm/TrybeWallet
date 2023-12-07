import { useSelector } from 'react-redux';

function Header() {
  const { email } = useSelector((state: any) => state.user);
  return (
    <div>
      <h2 data-testid="email-field">{ email }</h2>
      <h2 data-testid="total-field">0</h2>
      <h2 data-testid="header-currency-field">BRL</h2>
    </div>
  );
}

export default Header;
