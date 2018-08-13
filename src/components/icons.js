import React, { Component } from 'react';
import feather from 'feather-icons';

const starredStyle = {
    fill: "yellow"
}
class Icons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let SVGcontext;
    if(this.props.starred){
       SVGcontext = feather.icons[this.props.iconName].toSvg(starredStyle);
    }else{
      SVGcontext = feather.icons[this.props.iconName].toSvg();
    }
   
    return <div dangerouslySetInnerHTML={{ __html: SVGcontext }} />;
  }
}

export default Icons;
