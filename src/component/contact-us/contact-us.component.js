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

            <div class="contacttext" width="50%">
              <center>
                <p>ราชาการพิมพ์ ให้บริการการพิมพ์มา มากกว่า 15 ปี</p>
                <p>บริษัท ราชาการพิมพ์ 2002 จำกัด เป็นโรงงานผลิต และจัดจำหน่าย ภาชนะใส่อาหารและเครื่องดื่ม สำหรับค้าปลีก เช่น ถุงกระดาษ แก้วกาแฟ บรรจุภัณฑ์กระดาษสำหรับอาหาร รับผลิตลวดลายสินค้าตามที่ท่านต้องการ และยังมีลวดลายสินค้า ให้ท่านเลือกมากมาย เหมาะสำหรับธุรกิจร้านกาฟ ผู้ทำธุรกิจร้านอาหาร และเรายังมีบริการออกแบบและพิมพ์ โบรชัวร์ รับพิมพ์แคตตาล็อค รับพิมพ์ใบปลิว รับทำโปสเตอร์ ออกแบบสื่อโฆษณา รับพิมพ์นิตยสาร รับพิมพ์วารสาร จัดพิมพ์หนังสือรุ่น รับทำปฏิทิน รับพิมพ์นามบัตร ส.ค.ส. กระดาษโน๊ต กล่องกระดาษ ฉลากสินค้า ถุงกระดาษ ถุงสัมมนา งานอิงค์เจ็ท เอกสารสำนักงาน ซองจดหมาย ซองเอกสาร หัวจดหมาย รับพิมพ์งานด่วน พิมพ์หนังสือ รับออกแบบฟิล์ม 4 สี เพลท 4 สีตัด รับพิมพ์นามบัตร รับพิมพ์การ์ด รับพิมพ์ออฟเซ็ท รับพิมพ์งานด่วน บริการออกแบบสื่อสิ่งพิมพ์และรับพิมพ์งานพิมพ์ทุกชนิด</p>
              </center>
            </div>
          </div>
        )
    }
}

export default ContactUs;
