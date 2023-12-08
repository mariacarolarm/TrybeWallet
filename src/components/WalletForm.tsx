function WalletForm() {
  return (
    <form action="">
      <input
        type="number"
        data-testid="value-input"
        placeholder="Valor da Despesa"
      />
      <input
        type="text"
        data-testid="description-input"
        placeholder="Descrição da Despesa"
      />
      <select data-testid="currency-input">
        <option value="">{}</option>
      </select>
      <select data-testid="method-input">
        <option value="">Dinheiro</option>
        <option value="">Cartão de crédito</option>
        <option value="">Cartão de débito</option>
      </select>
      <select data-testid="tag-input">
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
      <button>Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
