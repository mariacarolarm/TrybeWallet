function Login() {
  return (
    <form>
      <label htmlFor="" data-testid="email-input">
        <input type="email" placeholder="Digite seu email" />
      </label>
      <label htmlFor="" data-testid="password-input">
        <input type="password" placeholder="Digite sua senha" />
      </label>
      <button>Entrar</button>
    </form>
  );
}

export default Login;
