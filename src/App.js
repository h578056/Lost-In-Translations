import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginView from "./Components/Login/LoginView";
import TranslateView  from "./Components/Translate/TranslateView";
import ProfileView from "./Components/Profile/ProfileView";
import NotFoundView from "./Components/NotFound/NotFound";
import AppContainer from "./hoc/AppContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContainer>
          <h1>Translate App</h1>
        </AppContainer>
        <Switch>
          <Route path="/" exact component={LoginView} />
          <Route path="/" exact component={TranslateView} />
          <Route path="/" exact component={ProfileView} />
          <Route path="*" component={NotFoundView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
