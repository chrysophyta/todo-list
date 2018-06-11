import React, { Component } from 'react';
import feather from 'feather-icons';

class Icons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const SVGcontext = feather.icons[this.props.iconName].toSvg();

    return <div dangerouslySetInnerHTML={{ __html: SVGcontext }} />;
  }
}

export default Icons;
