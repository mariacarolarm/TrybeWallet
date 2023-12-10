import { useSelector } from 'react-redux';
import { ExpensesType } from '../services/types';

function Header() {
  const { email } = useSelector((state: any) => state.user);
  const expenses = useSelector((state: any) => state.wallet.expenses);

  const totalExpenses = expenses.reduce((total: number, expense: ExpensesType) => {
    const totalExpense = expense.exchangeRates?.[expense.currency]?.ask;
    return total + Number(expense.value) * Number(totalExpense);
  }, 0);
  return (
    <div>
      <h2 data-testid="email-field">{ email }</h2>
      <h2 data-testid="total-field">{totalExpenses.toFixed(2)}</h2>
      <h2 data-testid="header-currency-field">BRL</h2>
    </div>
  );
}

export default Header;
