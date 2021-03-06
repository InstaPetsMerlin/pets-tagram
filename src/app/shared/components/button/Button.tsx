import React from 'react';
import './button.scss';

function Button(props: any) {
  return <button className="button">{props.children}</button>;
}

export default Button;
