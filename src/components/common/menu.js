import React from 'react';
import {connect} from 'react-redux';

class Menu extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    return (
      <ul className="navigation">
        <li className="nav-item-avatar">
          <ul>
            <li className="menu-bar">
              <div className="avatar_sidebar">
                <span>ad</span>
              </div>
              <div className="name_avatar">
                <span> admin </span>
                <span>Siêu thị vật liệu nha khoa Denmart.vn</span>
              </div>
            </li>
          </ul>
        </li>
        <li className="nav-item" id="menu-product">
          <a id="a_menu_product" href="#" className="menu-product active">
            <i className="fa-product" />
            <span className="span-nav menuloading">SẢN PHẨM</span>
          </a>
        </li>
        <li className="nav-item">
          <a id="a_menu_order" href="#" className="menu-order ">
            <i className="fa-order" />
            <span className="span-nav menuloading">ĐƠN HÀNG</span>
          </a>
        </li>
        <li className="nav-item">
          <a id="a_menu_cauhinh" href="#" className="menu-order ">
            <i className="fa-config" />
            <span className="span-nav menuloading">CẤU HÌNH</span>
          </a>
        </li>
        <li className="nav-item"><a href>
          <i className="fa-logout" /> <span className="span-nav menuloading">THOÁT</span></a></li>
        <li className="nav-item">
          <a target="_blank" href>
            <i className="fa-question-circle" /> <span className="span-nav">XEM HƯỚNG DẪN SỬ DỤNG</span>
          </a>
        </li>
      </ul>
    )
  }

}
function mapStateToProps(state, ownProps) {
  return {

  };
}

export default connect(mapStateToProps)(Menu);
