import React from 'react';

const Intro = (props) => {
  return (
    <p className="App-intro">
      { props.message }
    </p>
  );
}

export default Intro;