import React from 'react';
import './StyledText.css'; // This is where we will apply the styles

export const StyledText = () => {
  return (
    <div>
      <h1 className="heading">IMAGINE A PLACE...</h1>
      <p className="paragraph">
        ...where you can belong to a school club, a gaming group, or a worldwide art community. 
        Where just you and a handful of friends can spend time together. A place that makes 
        it easy to talk every day and hang out more often.
      </p>
      <a href="#" className="button">Download for Mac</a>
      <a href="#" className="button-alt">Open Discord in your browser</a>
    </div>
  );
};
