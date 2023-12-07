import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savedEmail } from '../redux/actions';

function Login() {
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [password, setPassword] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const checkEmail = emailRegex.test(loginEmail);
  const checkPassword = password.length >= 6;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/carteira');
    dispatch(savedEmail(loginEmail));
  };

  return (
    <form onSubmit={ handleSubmit }>

      <input
        data-testid="email-input"
        type="email"
        placeholder="Digite seu email"
        value={ loginEmail }
        onChange={ (e) => setLoginEmail(e.target.value) }
      />

      <input
        data-testid="password-input"
        type="password"
        placeholder="Digite sua senha"
        onChange={ (e) => setPassword(e.target.value) }
      />

      <button disabled={ !checkEmail || !checkPassword }>Entrar</button>
    </form>
  );
}

export default Login;
