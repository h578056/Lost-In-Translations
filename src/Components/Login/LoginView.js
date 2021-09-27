import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContainer from "../../hoc/AppContainer";
import { loginAttemptAction } from "../../store/actions/loginActions";
import { registerAttemptAction } from "../../store/actions/registerActions";

const LoginView = () => {

  const dispatch = useDispatch()

  const { loginError, loginAttempting } = useSelector(state => state.loginReducer)
  // const { registerError, registerAttempting } = useSelector(state => state.registerReducer)

  const [ credentials, setCredentials ] = useState({
    username: ''
  })

  const onInputChange = event => {
    setCredentials({
      ...credentials,
      [event.target.id]: event.target.value
    })
  }

  // const handleLogin = () =>{
  // }

  const onFormSubmit = event => {
    event.preventDefault()
    dispatch(loginAttemptAction(credentials))
    // dispatch(registerAttemptAction(credentials))
  }

  return (
    <AppContainer>
      <form className="LoginView mt-3 mb-3" onSubmit={ onFormSubmit }>
        <h1>Login</h1>
        <div className="mt-3 mb-3">
          <label htmlFor="" className="form-lable">Username</label>
          <input id="username" type="text" 
          placeholder="Enter username here" 
          className="form-control"
          onChange= { onInputChange }></input>
        </div>

        <button type="submit" className="btn btn-primary btn-lg">Login</button>

      </form>

      { loginAttempting &&
        <p>Trying to login..</p>
      }

      { loginError &&
          <div className="alert alert-danger">
              <h4>Unsuccessful</h4>
              <p className="mb-0">{ loginError }</p>
          </div>
      }

      {/* { registerAttempting &&
        <p>Trying to register..</p>
      }

      { registerError &&
          <div className="alert alert-danger">
              <h4>Unsuccessful</h4>
              <p className="mb-0">{ registerError }</p>
          </div>
      } */}

    </AppContainer>
  );
}

export default LoginView;