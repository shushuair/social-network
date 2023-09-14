import React, {useEffect} from 'react';
import 'app/App.module.css';
import {Login} from "features/auth/ui/Login";
import {usersThunk} from "features/users/model/usersSlice";
import {useActions} from "common/hooks/useActions";

function App() {
    const {getUsers} = useActions(usersThunk)


useEffect(()=>{
    usersThunk.getUsers({

    })
})


    // useEffect(() => {
    //     usersAPI.users({
    //         count: 2,
    //         page: 2,
    //         term: "22"
    //     })
    //         .then((res)=>{
    //             console.log(res)
    //         })
    // },[])

      return (
      <div>
        <Login/>
      </div>
      )
}

export default App;
