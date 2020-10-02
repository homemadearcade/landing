import React from 'react';
// import sections
import classNames from 'classnames';
import GameItem from '../components/elements/GameItem';

const GameList = () => {

  if(!window.gameList) return null

  const outerClasses = classNames(
    'features-split section',
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
  );

  const splitClasses = classNames(
    'split-wrap',
  );

  function renderGameList () {
    return <div className="GameList">
      {window.gameList.map((game) => {
        if(!game.metadata || !game.metadata.inMarketingArcade) return
        return <GameItem game={game}/>
      })}
    </div>
  }

  return (
    <section
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>
            {renderGameList()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameList;
