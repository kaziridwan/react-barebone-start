import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div>
        This is a banner for
       &nbsp;<b>Up<u>Bit</u></b>
       {this.props.sexy()}
      </div>
    );
  }
}

export default Banner;