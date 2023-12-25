import React from "react"
import "./App.css"
import { Header } from "components/Header/Header"
import { Navbar } from "components/NavBar/Navbar"
import { Profile } from "components/Profile/Profile"
import { DialogsContainer } from "./components/Dialogs/DialogsContainer"
import { Route } from "react-router-dom"
import { Music } from "components/Music/Music"
import { News } from "components/News/News"
import { Settings } from "components/Settings/Settings"

type AppPropsType = {}


function App(props: AppPropsType) {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <div className={"appWrapperContent"}>
        <Route path={"/profile"}
               render={()=> <Profile />}/>
        <Route path={"/dialogs"}
               render={() => <DialogsContainer/>} />
        <Route path={"/news"} render={() => <News />} />
        <Route path={"/music"} render={() => <Music />} />
        <Route path={"/settings"} render={() => <Settings />} />
      </div>
    </div>
  )
}

export default App
