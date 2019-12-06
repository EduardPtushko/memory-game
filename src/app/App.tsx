import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Game from '../features/Game/Game';
import GlobalStyle from '../Global';
import Auth from '../features/Account/Auth/Auth';
import Signout from '../features/Account/components/Signout/Signout';
import Results from '../features/Result/Resulsts/Results';
import { AppState } from './rootReducer';

const App = (): JSX.Element => {
    const { token } = useSelector((state: AppState) => state.auth);

    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Game />
                </Route>
                <Route exact path='/account/login'>
                    {token === null ? <Auth /> : <Redirect to='/' />}
                </Route>
                <Route exact path='/account/signup'>
                    {token === null ? <Auth /> : <Redirect to='/' />}
                </Route>
                <Route exact path='/results'>
                    {token === null ? <Redirect to='/' /> : <Results />}
                </Route>

                <Route exact path='/account/signout'>
                    {token === null ? <Redirect to='/' /> : <Signout />}
                </Route>
                <Redirect to='/' />
            </Switch>
            <GlobalStyle />
        </>
    );
};

export default App;
