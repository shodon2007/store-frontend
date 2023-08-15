import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Catalog from './Catalog';
import MainPage from './MainPage';

const AppRouter = () => {
    return (
        <Switch>
            <Route path='/catalog'>
                <Catalog />
            </Route>
            <Route path='/'>
                <MainPage />
            </Route>
        </Switch>
    )
}

export default AppRouter