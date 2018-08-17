import React, { Component } from 'react';
import feather from 'feather-icons';

const style = {
  width: 24,
  height: 24,
  'stroke-width': 1.5
};
const filledStyle = {
  ...style,
  fill: 'black'
};

class Icons extends Component {
  render() {
    let SVGcontext;
    if (this.props.filled) {
      SVGcontext = feather.icons[this.props.iconName].toSvg(filledStyle);
    } else {
      SVGcontext = feather.icons[this.props.iconName].toSvg(style);
    }

    return <div dangerouslySetInnerHTML={{ __html: SVGcontext }} />;
  }
}

export default Icons;
