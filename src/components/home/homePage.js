import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postAction from '../../actions/postAction' ;
import  Menu from '../common/menu';
import  Header from '../common/header';
import ListCart from '../cart/listCart';


class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      postList: [],
      listCart: [],
      totalPrice: 0
    }
    this.loadPostAction = this.loadPostAction.bind(this);
    this.tongCongCart = this.tongCongCart.bind(this);
    this.onChangeMoneyProduct = this.onChangeMoneyProduct.bind(this);
    this.onChangeTotalProduct = this.onChangeTotalProduct.bind(this);
    this.onDeleteItemCart = this.onDeleteItemCart.bind(this);


  }

  componentWillMount() {
    this.loadPostAction(this.props);

  }
  tongCongCart(listCart) {
    let totalCart = 0;
    listCart.forEach(item => {
      totalCart += (item.pricePrivate ? item.pricePrivate : item.list_price) * (item.totalItem ? item.totalItem : 1) ;
    })
    this.setState({ totalPrice: totalCart});
  }

  loadPostAction(props) {
    let loadPost = postAction.loadPost();
    loadPost.then(rss => {
      return rss.json();
    }).then( listData => {
      this.setState({ postList: listData.data });
    }).catch(rss =>{
      console.log("errorrr ",rss);
    })
  }

  orderCart(post) {
    //console.log('Post la',  post);
    post.totalItem = post.totalItem ? post.totalItem : 1;
    let listCart = this.state.listCart;
    let checkIssetCart = 0;
    listCart.forEach((item, index) => {
      if(item.id == post.id) {
        listCart[index]['totalItem'] += 1;
        checkIssetCart = 1;
      }
    })
    if(!checkIssetCart) {
      listCart.push(post);
    }
    this.setState({ listCart: listCart });
    this.tongCongCart(listCart);
  }

  onChangeMoneyProduct(evt) {
    let priceVl = parseInt(evt.target.value);
    let postId = evt.target.getAttribute('data-postId');
    let listCart = this.state.listCart;
    listCart.forEach((item, index) => {
      // let obNew = item;
      if(item.id == postId) {
        listCart[index]['pricePrivate'] = priceVl;
      }
    })
    this.setState({ listCart: listCart });
    this.tongCongCart(listCart);
  }


  onChangeTotalProduct(evt) {
    let total = parseInt(evt.target.value);
    let postId = evt.target.getAttribute('data-postId');
    let listCart = this.state.listCart;
    listCart.forEach((item, index) => {
      // let obNew = item;
      if(item.id == postId) {
        listCart[index]['totalItem'] = total;
      }
    })
    this.setState({ listCart: listCart });
    this.tongCongCart(listCart);
  }

  onDeleteItemCart(id) {
    let listCart = this.state.listCart;
    listCart.forEach((item, index) => {
      // let obNew = item;
      if(item.id == id) {
        listCart.splice(index, 1);
      }
    })
    this.setState({ listCart: listCart });
    this.tongCongCart(listCart);
  }

  render() {
    const postList = this.state.postList;
    const listCart = this.state.listCart;
    return (
      <div id="wrap" className="table dots-loading">
        <Menu/>
        <input type="checkbox" id="nav-trigger" className="nav-trigger" />
        <label htmlFor="nav-trigger" />
        {/* listing sanpham */}
        <div className="site-wrap">
          <div className="wrap-product">
            <Header/>
            <section id="content-4" className="content-product content mCustomScrollbar light" data-mcs-theme="minimal-dark">
              <article className="box">
                {/* ko if: Products().length > 0 */}
                <ul className="list-pro">
                  { postList.map( post =>
                      <li data-placement="right" className="pro-item">
                        <a href="javascript:void(0)" onClick={this.orderCart.bind(this, post)}>
                          <div className="image product-add-to-cart" name="add">
                            <img  src={'data:image/png;base64, ' + post.image_medium } title={post.name}  />
                          </div>
                          <div className="title-product" >
                            <span href="#" id="add-cart" className="show-pop" data-placement="right" data-bind="text: title">
                              {post.name}
                            </span>
                          </div>
                        </a>
                      </li>
                    )
                  }

                </ul>
                <div style={{clear: 'both'}} />
              </article>
            </section>{/* End section content product */}
          </div>{/* End Wrap product */}
          <ListCart listCart = {listCart}  onDeleteItemCart={this.onDeleteItemCart} totalPrice= {this.state.totalPrice}
                    onChangeTotalProduct={this.onChangeTotalProduct} onChangeMoneyProduct={this.onChangeMoneyProduct}/>
        </div>{/* End site-wrap */}
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return  bindActionCreators( dispatch);
}

export default connect(mapStateToProps)(HomePage);
