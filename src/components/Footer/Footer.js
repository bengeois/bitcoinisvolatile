import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>
        In a episode of HBO’s Silicon Valley, Gilfoyle (Martin Starr) reveals
        that he mines bitcoin as a side gig — but only when the price is above a
        certain value. He creates an alert that plays the 1.36 second death
        metal song “You Suffer” by Napalm Death whenever bitcoin rises or drops
        so he can remote toggle his rig at home. Given the volatility of bitcoin
        and the volume of the song, this quickly becomes annoying and becomes a
        recurring theme throughout the episode. With this, now all user can
        completely imitate Gilfoyle as an actual mining rig at home to toggle on
        and off remotely.
      </p>
      <p className="copyright">
        Made with <span className="heart">♥</span> by{' '}
        <a
          href="https://benjaminbourgeois.com"
          title="Benjamin Bourgeois"
          rel="dofollow"
        >
          Benjamin Bourgeois
        </a>
      </p>
    </div>
  );
};

export default Footer;
