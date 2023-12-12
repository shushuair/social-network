import {addUserPost, StateType, updateNewPostText} from "redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "App";
import ReactDOM from 'react-dom';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App addUserPost={addUserPost} state={state} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}