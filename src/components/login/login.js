import React from 'react';
import {connect} from 'react-redux';
class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="login-panel panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title" />
              </div>
              <div className="panel-body">
                <form role="form" method="POST" action="/login">
                  <fieldset>
                    <div className="form-group">
                      <label>
                        Đăng nhập
                      </label>
                    </div>
                    <a href="http://localhost:3000/auth/facebook">
                      <input className="btn btn-lg btn-primary btn-block" type="button" value="Đăng nhập với Facebook" /> </a>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStatetoProps(state){
  return {

  };
}


export default  connect(mapStatetoProps)(Login);

