import React from 'react'
import {Route, Redirect} from 'react-router-dom';


export const PrivateRoute = ({component: Component, ...rest}) => {
    return (<Route {...rest} render={
        (props)=>{
            if(localStorage.getItem('token')){
                return <Component {...props}/>

            } else {
                <Redirect to='/login'/>
            }
        }}/>)
}

