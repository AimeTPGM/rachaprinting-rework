import React, { Component } from 'react';
import './contact-us.component.scss'
import Footer from '../footer/footer.component';
class ContactUs extends Component {
    render () {
        return (
          <div>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%20%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%202002&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
              </div>
            </div>

            <div>
                <div class="contact-title">
                  <center>
                    <h6>ราชาการพิมพ์ </h6>
                    <p> ให้บริการการพิมพ์ </p>
                    <h6> มามากกว่า 15 ปี</h6>
                  </center>
                </div>

                <div class="contact-body">
                  <p class="normaltext">บริษัท ราชาการพิมพ์ 2002 จำกัด</p>
                  <p class="highlight"> เป็นโรงงานผลิต และจัดจำหน่าย ภาชนะใส่อาหารและเครื่องดื่ม สำหรับค้าปลีก</p>
                  <p class="normaltext"> เช่น ถุงกระดาษ แก้วกาแฟ บรรจุภัณฑ์กระดาษสำหรับอาหาร รับผลิตลวดลายสินค้าตามที่ท่านต้องการ และยังมีลวดลายสินค้า ให้ท่านเลือกมากมาย เหมาะสำหรับธุรกิจร้านกาฟ ผู้ทำธุรกิจร้านอาหาร และเรายังมี</p>
                  <p class="highlight">บริการออกแบบและพิมพ์</p>
                  <p class="normaltext"> โบรชัวร์ รับพิมพ์แคตตาล็อค รับพิมพ์ใบปลิว รับทำโปสเตอร์ ออกแบบสื่อโฆษณา รับพิมพ์นิตยสาร รับพิมพ์วารสาร จัดพิมพ์หนังสือรุ่น รับทำปฏิทิน รับพิมพ์นามบัตร ส.ค.ส. กระดาษโน๊ต กล่องกระดาษ ฉลากสินค้า ถุงกระดาษ ถุงสัมมนา งานอิงค์เจ็ท เอกสารสำนักงาน ซองจดหมาย ซองเอกสาร หัวจดหมาย รับพิมพ์งานด่วน พิมพ์หนังสือ รับออกแบบฟิล์ม 4 สี เพลท 4 สีตัด รับพิมพ์นามบัตร รับพิมพ์การ์ด รับพิมพ์ออฟเซ็ท รับพิมพ์งานด่วน</p>
                  <p class="highlight"> บริการออกแบบสื่อสิ่งพิมพ์และรับพิมพ์งานพิมพ์ทุกชนิด</p>
                </div>

                <div class="contact-footer">
                <center>
                  <h5>ติดต่อราชาการพิมพ์</h5>
                </center>
                  <p>204/6-7 ถ.สุรวงศ์ แขวงสี่พระยา เขตบางรัก กทม.</p>
                  <p>02-266-3738</p>
                  <p>02-266-3739</p>
                  <p>02-266-3740</p>
                  <p>fax 02-234-8319</p>
                  <p>rachagroup@email.com</p>
                  <p>facebook</p>
                  <p>twitter</p>
                  <p>instagram</p>
                </div>
            </div>
          </div>
        )
    }
}

export default ContactUs;
