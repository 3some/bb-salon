import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
class GetToken extends React.Component {
  constructor(props, context) {
    super(props, context);
    const query = props.location.query;
    const token = query.token ;
    const username = query.username ;
    const userIdOdoo = query.userIdOdoo ;
    const userIdSale = query.userIdSale ;



    console.log("tokenBeautyBee ", token, username, userIdOdoo);
    localStorage.setItem('tokenBeautyBee', token);
    localStorage.setItem('username', username);
    localStorage.setItem('userIdOdoo', userIdOdoo);
    localStorage.setItem('userIdSale', userIdSale);
  }


  componentWillMount() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div></div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {

  };
}

export default connect(mapStateToProps)(GetToken);
