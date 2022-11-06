import './login.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = () => {

  const {login} = useContext(AuthContext);

  const handlerLogin = () => {
    login();
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Nyaw Media.</h1>
          <p>Sebuah website media sosial yang mengharuskan anda memposting garam setiap hari,
            no gahca no party ygy.
          </p>
          <span>
            Belum punya akun?
          </span>
          <Link to="/register">
            <button>Daftar</button>
          </Link>
        </div>
        <div className="right">
          <h1>Masuk</h1>
          <form action="">
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <Link to="/">
              
            <button onClick={handlerLogin}>Masuk</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login