import React from 'react';
// import sections
import classNames from 'classnames';
import GameItem from '../components/elements/GameItem';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';

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

  function renderInstructions () {
    return <div className="LiveInstructions">
      <h1
        className="m-0 mb-32 reveal-from-bottom"
        >We're excited to have you join us</h1>
      <h3
        className="normal-font m-0 mb-32 reveal-from-bottom"
        >
        There's a couple things we need you to do to prepare
      </h3>
      <h3
        className="normal-font m-0 mb-32 reveal-from-bottom"
        >1. Computer Check</h3>
      <h5
        className="normal-font m-0 mb-32 reveal-from-bottom"
        >
        Send us an email with your internet speed using the computer and wifi connection you plan to use during the experience
      <br/>
      <br/>
        {'Make sure you have the most recent version of Google Chrome installed and that "Use hardware acceleration when available" is enabled in Google Chrome -> Preferences -> Advanced -> Accessibility'}
      </h5>
      <h3
        className="normal-font m-0 mb-32 reveal-from-bottom"
        >2. Make an account</h3>
        <h5
          className="normal-font m-0 mb-32 reveal-from-bottom"
          >
          Go to <a className="button-link"  target="_blank" href="https://ha-social.herokuapp.com">{'https://ha-social.herokuapp.com'}</a> and make an account. Remember your password, you'll be using it to sign in to the experience
        </h5>
      <h3
        className="normal-font m-0 mb-32 reveal-from-bottom"
        >3. 15 Mins Before</h3>
        <h5
          className="normal-font m-0 mb-32 reveal-from-bottom"
          >
          Go to <a className="button-link" target="_blank" href="https://obs.ninja/">{'https://obs.ninja/'}</a> and click {'"Add your camera to obs"'} and copy the url it gives you. Be prepared to give us this url when you meet us on the video chat
          <br/>
          <br/>
          When your alloted time begins, meet us on the video chat link we sent you in the Onboarding Email
          <br/>
          <br/>
          {'Click "Begin" button below. then log in using the email and password you created in step 2'}
        </h5>
    </div>
  }

 // Use the "experience password" we gave you in the Onboarding Email and click unlock
 
  return (
    <section
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>
            {renderInstructions()}
            <Button tag="a" color="primary" wideMobile href={window.HAGameClientUrl + '?host=true&hero=singlePlayer&gameId=ha-prologue'}>
              Begin
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameList;
