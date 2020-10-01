import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Homemade Arcade
            </h1>
            <div className="container-xs">
              <h5 className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
               Journey into the arcade and find your game
                <br/><br/>
                A collaboration between the award winning creators of
                <a className="button-link" href="https://towalkthenight.com/talesbycandlelight">
                {' Tales by Candlelight '}
                </a>
                and
                <a className="button-link" href="https://noproscenium.com/the-joy-of-waking-up-bar-of-dreams-los-angeles-review-ff4fc8637fa9">
                  {' Bar of Dreams '}</a>
              </h5>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://towalkthenight.com/homemadearcade">
                    Get Tickets
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="/list">
                    Play Games
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/homemade-arcade-play.png')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            className="GameModal"
            show={videoModalActive}
            handleClose={closeModal}
            game="http://localhost:8080/?arcadeMode=true&gameId=ha-prologue"
          >
          </Modal>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
