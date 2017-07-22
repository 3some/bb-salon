import React from 'react';
import {connect} from 'react-redux';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    return (
      <header className="hearder-product" id="header" role="banner">
        <div className="col-bars block" />
        <div className="col-product text-c">
          <label className="customselect">
            <div id="colectionSelection" className="dd-container" >
              <div className="dd-select"><input className="dd-selected-value" type="hidden" defaultValue />
                <a className="dd-selected"><label className="dd-selected-text">Tất cả sản phẩm</label></a>
                <span className="dd-pointer dd-pointer-down" /></div>
              <ul className="dd-options dd-click-off-close">
                <div className="nano">
                  <div className="nano-content">
                    <li><a className="dd-option dd-option-selected"> <label className="dd-option-text">Tất
                      cả sản phẩm</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="acid-etching" /> <label className="dd-option-text">Acid etching</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="alginate-lay-dau-nha-khoa" /> <label className="dd-option-text">Alginate</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="amalgam" /> <label className="dd-option-text">Amalgam</label></a>
                    </li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="boi-tron-ong-tuy" /> <label className="dd-option-text">Bôi trơn ống tủy</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="bonding" /> <label className="dd-option-text">Bonding</label></a>
                    </li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="cao-su-nang-lay-dau-nha-khoa" /> <label className="dd-option-text">Cao su nặng</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="cao-su-nhe-lay-dau-nha-khoa" /> <label className="dd-option-text">Cao su nhẹ</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="chat-lay-dau-nha-khoa-alginate-cao-su-nang-cao-su-nhe" />
                      <label className="dd-option-text">Chất lấy dấu, răng tạm</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="che-tuy-bit-ong-tuy" /> <label className="dd-option-text">Che tủy, bít ống tủy</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="chong-viem-loi-e-buot" /> <label className="dd-option-text">Chống viêm lợi, ê buốt</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="chong-viem-nhiem-nha-khoa" /> <label className="dd-option-text">Chống viêm nhiễm</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="composite-tram-rang-nha-khoa" /> <label className="dd-option-text">Composite</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="composite-labo" /> <label className="dd-option-text">Composite Labo</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="diet-tuy-bom-rua-sat-trung" /> <label className="dd-option-text">Diệt tủy, bơm rửa, sát trùng</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="dung-cu-may-moc-labo" /> <label className="dd-option-text">Dụng cụ - Máy móc Labo</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="kim-cuong-gan-rang" /> <label className="dd-option-text">Kim cương gắn răng</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="kim-tiem" /> <label className="dd-option-text">Kim tiêm</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="mac-cai-day-cung" /> <label className="dd-option-text">Mắc cài, dây cung</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="mui-cat-cau-mao" /> <label className="dd-option-text">Mũi cắt cầu mão</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="mui-khoan-kim-cuong" /> <label className="dd-option-text">Mũi khoan kim cương</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="mui-khoan-mani-chinh-hang" /> <label className="dd-option-text">Mũi khoan Mani chính hãng</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="mui-khoan-thep" /> <label className="dd-option-text">Mũi khoan thép</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="mui-phau-thuat-cat-xuong" /> <label className="dd-option-text">Mũi phẫu thuật, cắt xương</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="nhua-nau-futura" /> <label className="dd-option-text">Nhựa nấu Futura</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="phoi-suon-kim-loai-va-quy-kim" /> <label className="dd-option-text">Phôi sườn Kim loại và Quý kim</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="phoi-suon-va-su-dap" /> <label className="dd-option-text">Phôi sườn và sứ đắp</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="phu-kien-chinh-nha" /> <label className="dd-option-text">Phụ kiện chỉnh nha</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="phu-kien-tram-danh-bong-composite-nha-khoa" />
                      <label className="dd-option-text">Phụ kiện trám, đánh bóng</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="san-pham-noi-bat-cua-denmart-vn" /> <label className="dd-option-text">Sản phẩm nổi bật của Denmart.vn</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="tay-trang-rang" /> <label className="dd-option-text">Tẩy trắng răng</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="thach-cao-nha-khoa" /> <label className="dd-option-text">Thạch cao nha khoa</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="thuoc-te" /> <label className="dd-option-text">Thuốc tê</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="thuoc-te-kim-tiem" /> <label className="dd-option-text">Thuốc tê, kim tiêm, chống viêm</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="trainer-chinh-nha" /> <label className="dd-option-text">Trainer</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-lieu-che-mau-opaque" /> <label className="dd-option-text">Vật liệu che màu ( Opaque )</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-lieu-chinh-nha" /> <label className="dd-option-text">Vật liệu chỉnh nha</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-lieu-dieu-tri-tuy-1" /> <label className="dd-option-text">Vật liệu điều trị tủy</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-lieu-dung-trong-labo" /> <label className="dd-option-text">Vật liệu dùng trong Labo</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-lieu-gan-dan-cau-mao-dan-tam" />
                      <label className="dd-option-text">Vật liệu gắn dán</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-lieu-gan-tam" /> <label className="dd-option-text">Vật liệu gắn tạm</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-lieu-gan-vinh-vien" /> <label className="dd-option-text">Vật liệu gắn vĩnh viễn</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-lieu-ham-thao-lap" /> <label className="dd-option-text">Vật liệu hàm tháo lắp</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-lieu-lam-rang-tam" /> <label className="dd-option-text">Vật liệu làm răng tạm</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-lieu-mai-danh-bong" /> <label className="dd-option-text">Vật liệu mài đánh bóng</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-lieu-tram-bit" /> <label className="dd-option-text">Vật liệu trám bít</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-lieu-tram-rang-cao-cap" /> <label className="dd-option-text">Vật liệu trám răng cao cấp</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-lieu-ve-sinh-rang" /> <label className="dd-option-text">Vật liệu vệ sinh răng</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-tu-tieu-hao" /> <label className="dd-option-text">Vật tư tiêu hao</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="vat-tu-tieu-hao-phong-nha" /> <label className="dd-option-text">Vật tư tiêu hao phòng nha</label></a></li>
                    <li><a className="dd-option"> <input className="dd-option-value" type="hidden" defaultValue="ve-sinh-tay-trang-tham-my" /> <label className="dd-option-text">Vệ sinh, tẩy trắng, thẩm mỹ</label></a></li>
                  </div>
                </div>
              </ul>
            </div>
          </label>
          <a id="cartfanext" className="fa-next active" data-bind=" css: { active: totalQty() > 0 }">
            <span className="total">{/* ko text: totalQty */}4{/* /ko */}</span>
          </a>
        </div>
        <div className="col-search">
          <div className="search-box">
            <input id="input-search" type="text" name="q" className="search_box" data-bind="value:Searchq" placeholder="Tìm kiếm " autoComplete="off" />
            <button type="button" id="submit" value="Search">
              <i className="fa-search" />
            </button>
            <button type="button" className="btn-clearsearch">
              <i className="fa-remove" />
            </button>
          </div>
          <a className="btn-cancel-search" href="javascript:">Hủy</a>
        </div>
      </header>
    )
  }

}
function mapStateToProps(state, ownProps) {
  return {

  };
}

export default connect(mapStateToProps)(Header);
