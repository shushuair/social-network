import "./index.css"
import {store} from "./redux/redux-store"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "App"

const rerenderEntireTree = (state: any) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} dispatch={store.dispatch.bind(store)} state={state} />
    </BrowserRouter>
    , document.getElementById("root")
  )
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
  const state = store.getState()
  rerenderEntireTree(state)
})
