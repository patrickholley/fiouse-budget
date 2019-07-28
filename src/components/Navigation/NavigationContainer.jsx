import React from 'react';
import Navigation from './Navigation';

function NavigationContainer(props) {
  return (
    <Navigation children={props.children} />
  );
}

export default NavigationContainer;
