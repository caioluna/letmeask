import loginImg from '../assets/images/illustration.svg'
import letmeaskLogo from '../assets/images/logo.svg'
import googleLogo from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';

import '../styles/auth.sass'

export function Home() {
  return (
    <div id="page-auth">

      <header>
        <img src={loginImg} alt="Chatboxes logo" />
        <h1>Toda pergunta tem uma resposta.</h1>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </header>

      <main>

        <div>
          <img className="letmeask-logo" src={letmeaskLogo} alt="Letmeask logo" />

          <button className="google-btn">
            <img src={googleLogo} alt="G google logo" />
            Crie sua sala com o Google
          </button>

          <form action="">
            <fieldset>
              <legend>ou entre em uma sala</legend>
              <label htmlFor="room-code">
                <input className="room-code" type="text" placeholder="Digite o código da sala" />
              </label>
              <Button className="button" type="submit">
                Entrar na sala
              </Button>
            </fieldset>
          </form>
        </div>

      </main>

    </div>
  );
}
