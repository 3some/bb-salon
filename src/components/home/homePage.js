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
  }

  componentWillMount() {
    this.loadPostAction(this.props);

  }
  tongCongCart(listCart) {
    let totalCart = 0;
    listCart.forEach(item => {
      totalCart += item.list_price;
    })
    this.setState({ totalPrice: totalCart});
  }



  loadPostAction(props) {
    let loadPost = postAction.loadPost();
    loadPost.then(rss => {
      return rss.json();
    }).then( listData => {
      console.log("listData.datalistData.data", listData.data);
      this.setState({ postList: listData.data });
    }).catch(rss =>{
      console.log("errorrr ",rss);
    })
  }

  orderCart(post) {
    console.log('Post la',  post);
    post.totalItem = 1;
    let listCart = this.state.listCart;
    listCart.push(post);
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
          <ListCart listCart = {listCart} totalPrice= {this.state.totalPrice}/>
        </div>{/* End site-wrap */}
        {/* currentProduct popover  */}
          <div className="webui-popover right in webui-no-padding" style={{display: 'none', left: '27.5px', top: '194.5px'}}>
            <div className="arrow" />
            <div className="webui-popover-inner">
              <div className="webui-popover-content">
                <ul className="list-group">
                  <li className="search-variant-wrapper" style={{display: 'block'}}>
                    <input type="text" onkeyup="searchVariant(this)" className="txt-search-variant " placeholder="Tìm biến thể sản phẩm" />
                  </li>
                  {/* ko if: currentProduct() && currentProduct().variants() */}
                  {/* ko foreach: currentProduct().variants() */}
                  <li className="list-group-item ">
                    <a className="addcart product-variant" href="https://onapp.haravan.com/posnew/sanpham?shop=dentmart.myharavan.com&timestamp=1498990680&signature=b83f26087defc5f2b032dfad22d407d04324e87b56291e98b040eb0748a4355b&_ga=2.134718129.1744621359.1498990641-323494687.1498990641#" data-bind="attr: { title: title, 'data-value': id }, fastclick: $root.addToCart" title="Màu sáng" data-value={1009594040}><span data-bind="text: title">Màu sáng</span> <span data-bind="attr: { class: inventory_class }, text: inventory_quantity" className="inventory-class inventory-management">10</span></a>
                  </li>
                  <li className="list-group-item ">
                    <a className="addcart product-variant" href="https://onapp.haravan.com/posnew/sanpham?shop=dentmart.myharavan.com&timestamp=1498990680&signature=b83f26087defc5f2b032dfad22d407d04324e87b56291e98b040eb0748a4355b&_ga=2.134718129.1744621359.1498990641-323494687.1498990641#" data-bind="attr: { title: title, 'data-value': id }, fastclick: $root.addToCart" title="Màu tối" data-value={1009594041}><span data-bind="text: title">Màu tối</span> <span data-bind="attr: { class: inventory_class }, text: inventory_quantity" className="inventory-class inventory-management">10</span></a>
                  </li>
                  {/* /ko */}
                  {/* /ko */}
                </ul>
              </div>
            </div>
          </div>
        {/* listing đơn hàng */}
        {/* listing settings */}
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
