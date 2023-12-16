import "./index.css"
import { StateType, store } from "redux/state"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "App"

const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} dispatch={store.dispatch.bind(store)} state={state} />
    </BrowserRouter>
    , document.getElementById("root")
  )
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
