import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Menu from "./components/Header/Header";
import Main from "./layouts/Main/Main";
import Posts from "./layouts/Posts/Posts";

function Routs () {
  return (
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </Router>
  )
}

export default Routs;