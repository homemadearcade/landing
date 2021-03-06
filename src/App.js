import React, { useRef, useEffect, useState } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import axios from 'axios';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import GameList from './views/GameList';
import LiveInstructions from './views/LiveInstructions';

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  const [gameList, setGameList] = useState()

  useEffect(() => {
    const page = location.pathname;
    if(gameList) document.body.classList.add('is-loaded')
    if(childRef && childRef.current) childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, gameList]);

  useEffect(() => {
    axios.get(window.HAGameServerUrl + '/gamesmetadata').then((res) => {
      window.gameList = res.data.games
      setGameList(res.data.games)
    }).catch((e) => {
      console.error('failed to get games list', e)
    })
  }, [])

  if(!window.gameList) return null

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (<Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault}/>
          <AppRoute exact path="/list" component={GameList} layout={LayoutDefault}/>
          <AppRoute exact path="/liveinstructions" component={LiveInstructions} layout={LayoutDefault}/>
        </Switch>)} />
  );
}

export default App;
