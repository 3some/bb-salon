import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postAction from '../../actions/postAction' ;
import  Menu from '../common/menu';
import  Header from '../common/header';

class ListCart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      orderCart: false,
      tenKhachHang: '',
      soDienThoai: '',
      email: '',
      diaChi: '',
      ghiChuDonHang: ''
    }

    this.onChangeTenKhach = this.onChangeTenKhach.bind(this);
    this.onChangeSoDienThoai= this.onChangeSoDienThoai.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDiaChi = this.onChangeDiaChi.bind(this);
    this.onChangeGhiChuDonHang = this.onChangeGhiChuDonHang.bind(this);
  }


  orderCartToOdoo(listCart) {
    let userIdOdoo = localStorage.getItem('userIdOdoo');
    let userIdSale = parseInt(localStorage.getItem('userIdSale'));

    let x_detail_customers = {
      tenKhachHang : this.state.tenKhachHang,
      soDienThoai : this.state.soDienThoai,
      email : this.state.email,
      diaChi : this.state.diaChi,
      ghiChuDonHang : this.state.ghiChuDonHang,
    }

    let line_vals = [{
      "partner_id": userIdSale,
      "partner_invoice_id": userIdSale,
      "partner_shipping_id": userIdSale,
      "date_order": "2017-07-22 15:47:35",
      "validity_date": "2017-09-01",
      "pricelist_id": 1,
      "payment_term_id": 2,
      "order_line": [],
      "note": false,
      "warehouse_id": 1,
      "incoterm": false,
      "picking_policy": "direct",
      "user_id": userIdOdoo,
      "tag_ids": [],
      "team_id": 1,
      "client_order_ref": false,
      "company_id": 1,
      "project_id": false,
      "fiscal_position_id": false,
      "origin": false,
      "campaign_id": false,
      "medium_id": false,
      "source_id": false,
      "opportunity_id": false,
      "message_follower_ids": false,
      "message_ids": false,
      "x_detail_customers":   JSON.stringify(x_detail_customers)
    }]
    let orderLine = [];
    listCart.forEach(item => {
      let itemlist = [0, false, {
        "qty_delivered": 0,
        "sequence": 10,
        "customer_lead": 0,
        "price_unit": item.list_price,
        "product_uom_qty": 1,
        "discount": 0,
        "state": "draft",
        "qty_delivered_updateable": true,
        "invoice_status": "no",
        "product_id": 5,
        "layout_category_id": false,
        "name": item.name,
        "product_uom": 1,
        "analytic_tag_ids": [],
        "route_id": false,
        "tax_id": [[6, false, [6]]],
        "procurement_ids": []
      }];

      orderLine.push(itemlist);
    })

    line_vals[0].order_line = orderLine;

    let orderCart = postAction.orderCart(line_vals);
    orderCart.then(rss => {
        return rss.json();
      }).then( listData => {
        console.log("listData.datalistData.data", listData);
        if(!listData.err) {
          this.setState({ orderCart: true });
        }
         else {
          this.setState({ orderCart: false });
        }
      }).catch(rss =>{
        console.log("errorrr ",rss);
      })
  }

  onChangeTenKhach(evt) {
    let valueInput = evt.target.value;
    this.setState({tenKhachHang: valueInput});
  }

  onChangeSoDienThoai(evt) {
    let valueInput = evt.target.value;
    this.setState({soDienThoai:  valueInput});
  }

  onChangeEmail(evt) {
    let valueInput = evt.target.value;
    this.setState({email : valueInput});
  }

  onChangeDiaChi(evt) {
    let valueInput = evt.target.value;
    this.setState({diaChi :valueInput});
  }

  onChangeGhiChuDonHang(evt) {
    let valueInput = evt.target.value;
    this.setState({ghiChuDonHang :valueInput});
  }



  render() {
    let listCart = this.props.listCart;
    return (
      <div className="wrap-cart-checkout">
        <div className="wrap-cart">
          <section className="content-cart" >
            <article>
              <div id="cartform">
                <table className="table-cart scroll" border={1} align="center" cellPadding={5} cellSpacing={0}>
                  <thead>
                  <tr>
                    <th>
                      <span className="col-trash">
                        <a data-bind="fastclick:clearCart"><i className="fa-trash" /></a>
                      </span>
                      <a id="cartfaback" className="fa-back" />
                    </th>
                    <th colSpan={4} className="theadcarttotal">
                      <span className="col-cart text-c">Giỏ hàng (Items)</span>
                    </th>
                  </tr>
                  <tr>
                    <th colSpan={5} className="divider" />
                  </tr>
                  </thead>
                  <tbody style={{height: 384, display: 'block'}}>

                  { listCart.map( (listItem, index) =>
                  <tr>
                    <td className="cart-img">
                      <div className="number-item" >{index + 1}</div>
                      <div className="pro-img">
                        <img  className="circular-img" src={'data:image/png;base64, ' + listItem.image_medium } title="Default Title" />
                      </div>
                    </td>
                    <td className="cart-title">
                      <div className="name_cart">
                        <span> {listItem.name}</span>
                        <div className="variant_title">Default
                          Title
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <input min={1} max={99999} value={listItem.totalItem} type="number" data-postId={listItem.id} onChange={this.props.onChangeTotalProduct} className="update_number" name="updates" />
                      </div>
                      <div>
                      </div>
                    </td>
                    <td>
                      <span className="price">
                         <input min={1} max={99999} value={listItem.pricePrivate ? listItem.pricePrivate : listItem.list_price}
                                data-postId={listItem.id} onChange={this.props.onChangeMoneyProduct} type="number"
                                className="update_number update_price" style={{width: 80,fontSize:12}} name="updates" /></span>
                    </td>
                    <td className="remove-cart-item"  >
                      <a onClick={this.props.onDeleteItemCart.bind(this.props.onDeleteItemCart, listItem.id)} ><i className="fa-delete" /></a>
                    </td>
                  </tr>

                  )}

                  </tbody>
                  <tfoot>
                  <tr>
                    {/*onClick = {this.orderCartToOdoo.bind(listCart)}*/}
                    <th colSpan={5}>
                      <a className="btn-sum" >
                        <span>Tổng cộng </span>
                        <span >{this.props.totalPrice}&nbsp;₫</span>
                      </a>
                    </th>

                  </tr>
                  </tfoot>
                </table>
              </div>
            </article>
          </section>
        </div>{/* End wrapt cart */}
        <div className="wrap-checkout" style={{height: 599}}>
          <div className="container clearfix">
            <div id="purchase-form">
              <div className="col-4 ">
                <div className="checkout-steps">
                  <table id="input-price">
                    <tbody>
                    <tr>
                      <td colSpan={2}>
                        <br/>
                        <label className="lb-1">Thành tiền </label>
                      </td>
                      <td colSpan={3} align="right">
                        <br/>
                        <span className="price" data-bind="textMoneyWithSymbol:subtotal">{this.props.totalPrice}&nbsp;₫</span>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <div className="checkout-step">
                    <a href="javascript:" className="show-info"> <img className="ico-plus" src="/static/images/plus.png" />
                      <img className="ico-minus" src="/static/images/minus.png" />
                      <span>Thêm thông tin đơn hàng</span></a>
                    <div className="customer-info">
                      <div className="box-cart">
                        <input placeholder="Tên khách hàng" className="checkoutinput" type="text" value={this.state.tenKhachHang}  onChange = {this.onChangeTenKhach} />
                        <div className="block-1 phoneblock">
                          <input placeholder="Số điện thoại" className="checkoutinput" type="tel"  value={this.state.soDienThoai}  onChange = {this.onChangeSoDienThoai} />
                          <button type="button" value="Search" data-bind="fastclick: searchCustomerByPhone" className="fa-search" />
                          {/* ko if: SuggestCustomer().length > 0 && searchCustomerType() == 'phone' && searchCustomerDisplay() */}
                          {/* /ko */}
                        </div>
                        <div className="block-1">
                          <input placeholder="Email" className="checkoutinput" type="email"  />
                          <button type="button" value="Search" data-bind="fastclick: searchCustomerByEmail"   value={this.state.email}  onChange = {this.onChangeEmail}  className="fa-search" />
                          {/* ko if: SuggestCustomer().length > 0 && searchCustomerType() == 'email' && searchCustomerDisplay() */}
                          {/* /ko */}
                        </div>
                        <textarea placeholder="Địa chỉ" className="checkoutinput"  value={this.state.diaChi}  onChange = {this.onChangeDiaChi}  />
                        <div className="select-wrapper provincesblock">
                          <select className="checkoutinput" data-bind="options: provinces,
                            optionsText: function(item) {
                                return item().name
                            },
                            value: selectedProvince,
                            optionsCaption: 'Vui lòng chọn tỉnh/thành phố'">
                            <option value>Vui lòng chọn tỉnh/thành phố</option>
                            <option value>Hồ Chí Minh</option>
                            <option value>Hà Nội</option>
                            <option value>An Giang</option>
                            <option value>Bình Định</option>
                            <option value>Bắc Giang</option>
                            <option value>Bình Dương</option>
                            <option value>Bắc Kạn</option>
                            <option value>Bạc Liêu</option>
                            <option value>Bắc Ninh</option>
                            <option value>Bình Phước</option>
                            <option value>Bến Tre</option>
                            <option value>Bình Thuận</option>
                            <option value>Bà Rịa - Vũng Tàu</option>
                            <option value>Cao Bằng</option>
                            <option value>Cà Mau</option>
                            <option value>Cần Thơ</option>
                            <option value>Đà Nẵng</option>
                            <option value>Điện Biên</option>
                            <option value>Đắk Lắk</option>
                            <option value>Đồng Nai</option>
                            <option value>Đắk Nông</option>
                            <option value>Đồng Tháp</option>
                            <option value>Gia Lai</option>
                            <option value>Hải Dương</option>
                            <option value>Hà Giang</option>
                            <option value>Hà Nam</option>
                            <option value>Hòa Bình</option>
                            <option value>Hải Phòng</option>
                            <option value>Hà Tĩnh</option>
                            <option value>Hậu Giang</option>
                            <option value>Hưng Yên</option>
                            <option value>Kiên Giang</option>
                            <option value>Khánh Hòa</option>
                            <option value>Kon Tum</option>
                            <option value>Long An</option>
                            <option value>Lâm Đồng</option>
                            <option value>Lai Châu</option>
                            <option value>Lào Cai</option>
                            <option value>Lạng Sơn</option>
                            <option value>Nghệ An</option>
                            <option value>Ninh Bình</option>
                            <option value>Nam Định</option>
                            <option value>Ninh Thuận</option>
                            <option value>Phú Thọ</option>
                            <option value>Phú Yên</option>
                            <option value>Quảng Bình</option>
                            <option value>Quảng Ngãi</option>
                            <option value>Quảng Nam</option>
                            <option value>Quảng Ninh</option>
                            <option value>Quảng Trị</option>
                            <option value>Sơn La</option>
                            <option value>Sóc Trăng</option>
                            <option value>Thái Bình</option>
                            <option value>Tiền Giang</option>
                            <option value>Thanh Hóa</option>
                            <option value>Tây Ninh</option>
                            <option value>Tuyên Quang</option>
                            <option value>Thừa Thiên Huế</option>
                            <option value>Trà Vinh</option>
                            <option value>Thái Nguyên</option>
                            <option value>Vĩnh Long</option>
                            <option value>Vĩnh Phúc</option>
                            <option value>Yên Bái</option>
                          </select>
                          <span className="spselectdown">▼</span>
                        </div>
                        <div className="select-wrapper">
                          <select className="checkoutinput" data-bind="options: provinceDistricts,
                            optionsText: function(item) {
                                return item.name()
                            },
                            value: selectedDistrict,
                            optionsCaption: 'Vui lòng chọn quận/huyện'">
                            <option value>Vui lòng chọn quận/huyện</option>
                          </select>
                          <span className="spselectdown">▼</span>
                        </div>
                        <textarea id="checkout_note" className="checkoutinput" placeholder="Ghi chú đơn hàng"  value={this.state.ghiChuDonHang}  onChange = {this.onChangeGhiChuDonHang}  rows={2}  />
                        <div className="linezone">
                          <label htmlFor="dathanhtoantaicuahang">
                            <input id="dathanhtoantaicuahang" type="checkbox" data-bind="checked: financialStatus" />
                            <span className="checktitle">Đã thanh toán tại cửa hàng</span>
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <label htmlFor="dagiaohang">
                            <input id="dagiaohang" type="checkbox" data-bind="checked: fulfillmentStatus" />
                            <span className="checktitle">Đã giao hàng</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn-checkout"  onClick = {this.orderCartToOdoo.bind(this,listCart)}> Đặt hàng </button>
                </div>
              </div>
            </div> {/* End purchase-form */}
            <div id="checkoutsuccess" style={{display: "block"}}>
              {this.state.orderCart ?
                  <p>Order Success!</p>
                : ''
              }
            </div>
          </div>{/* End checkout */}
        </div>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return  bindActionCreators( dispatch);
}

export default connect(mapStateToProps)(ListCart);

// export default  ListCart;
