import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../App';

import illustrationImg from '../assets/images/illustration.svg'
import letmeaskLogo from '../assets/images/logo.svg'

import { Button } from '../components/Button';

import '../styles/auth.sass'

export function NewRoom() {
  const { user } = useContext(AuthContext)

  return (
    <div id="page-auth">

      <header>
        <img src={illustrationImg} alt="Chatboxes logo" />
        <h1>Toda pergunta tem uma resposta.</h1>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </header>

      <main>
        <div>
          <img className="letmeask-logo" src={letmeaskLogo} alt="Letmeask logo" />
          <h2>Crie uma nova sala</h2>

          <form action="">
            <label htmlFor="new-room-name">
              <input className="new-room-name" type="text" placeholder="Nome da sala" />
            </label>
            <Button className="button" type="submit">
              Criar sala
            </Button>
            <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
          </form>
        </div>

      </main>

    </div>
  );
}
