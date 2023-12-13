import './index.css';
import {addUserPost, state, StateType, subscribe, updateNewPostText} from "redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "App";
const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App addUserPost={addUserPost} state={state} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)
