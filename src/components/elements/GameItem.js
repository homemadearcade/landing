import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PlayableImage from './PlayableImage';
import Modal from './Modal';

const propTypes = {
  game: PropTypes.object,
}

const defaultProps = {
  game: {},
}

const GameItem = ({
  game,
  ...props
}) => {

  const [gameModalActive, setGamemodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setGamemodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setGamemodalactive(false);
  }
  return (
    <div className="split-item">
        <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
            Spencer Williams
            </div>
          <h3 className="mt-0 mb-12">
            Baby Bird
            </h3>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className={
          classNames(
            'split-item-image center-content-mobile',
             'split-item-image-fill'
          )}
          data-reveal-container=".split-item">
          <a
            className="PlayGameButton"
            onClick={openModal}
          >
          <PlayableImage
            src={game.metadata.featuredImage.url}
            alt="Features split 01"
            width={528}
            height={264} />
          </a>
        </div>
        <Modal
          className="GameModal"
          show={gameModalActive}
          handleClose={closeModal}
          game={window.HAGameClientUrl + '/?arcadeMode=true&gameId=' + game.id}
        >
        </Modal>
      </div>
  );
}

GameItem.propTypes = propTypes;
GameItem.defaultProps = defaultProps;

export default GameItem;
