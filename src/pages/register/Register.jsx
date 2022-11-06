import './register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Nyaw Media.</h1>
          <p>Sebuah website media sosial yang mengharuskan anda memposting garam setiap hari,
            no gahca no party ygy.
          </p>
          <span>
            Sudah punya akun?
          </span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Daftar</h1>
          <form action="">
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="text" placeholder='Name' />
            <Link to="/">
              <button>Daftar</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register