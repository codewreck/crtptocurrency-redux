import React from 'react';
import { connect } from 'react-redux';
import { loadCoin }  from '../actions/index.js';
import _ from 'lodash';
import uuid from 'uuid';


class Blocks extends React.Component {
  componentDidMount() {
    this.props.loadCoin();
    setInterval(() => this.props.loadCoin(), 60*1000);
  }

  render(){
    return (
      <div>
        {this.props.data.map((yolo) => <p key={yolo.id}>{yolo.id}(live):{yolo.price_usd}</p>)}
        {this.props.history.map((lmao) => <p key={uuid()}>{lmao.id} : {lmao.price_usd}</p>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect (mapStateToProps, {loadCoin})(Blocks);
