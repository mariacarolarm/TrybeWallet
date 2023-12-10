import { useDispatch, useSelector } from 'react-redux';
import { FormEvent, useEffect, useState } from 'react';
import { GlobalType, ThunkType } from '../services/types';
import { currenciesApi, newExpenses } from '../redux/actions';
import fetchExchange from '../services/fetchExchange';

function WalletForm() {
  const dispatch: ThunkType = useDispatch();
  const currencies = useSelector((state: GlobalType) => state.wallet.currencies);
  const expenses = useSelector((state: GlobalType) => state.wallet.expenses);

  const [form, setForm] = useState({
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  });

  useEffect(() => {
    dispatch(currenciesApi());
  }, [dispatch]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const exchangeRates = await fetchExchange();

    const newExpense = {
      id: expenses.length,
      value: form.value,
      description: form.description,
      currency: form.currency,
      method: form.method,
      tag: form.tag,
      exchangeRates,
    };

    dispatch(newExpenses([newExpense]));

    setForm({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="number"
        data-testid="value-input"
        placeholder="Valor da Despesa"
        value={ form.value }
        onChange={ (e) => setForm({ ...form, value: e.target.value }) }
      />
      <input
        type="text"
        data-testid="description-input"
        placeholder="Descrição da Despesa"
        value={ form.description }
        onChange={ (e) => setForm({ ...form, description: e.target.value }) }
      />
      <select
        data-testid="currency-input"
        value={ form.currency }
        onChange={ (e) => setForm({ ...form, currency: e.target.value }) }
      >
        {currencies.map((currency) => (
          <option key={ currency } value={ currency }>
            {currency}
          </option>
        ))}
      </select>
      <select
        data-testid="method-input"
        value={ form.method }
        onChange={ (e) => setForm({ ...form, method: e.target.value }) }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
      <select
        data-testid="tag-input"
        value={ form.tag }
        onChange={ (e) => setForm({ ...form, tag: e.target.value }) }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
      <button type="submit">Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
