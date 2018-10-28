import React, { Component } from 'react';
import './how-to.style.scss'
class HowTo extends Component {
    render () {
        const steps = [
            { 
                header: 'เลือกสินค้า',
                content: 'ลูกค้าสามารถเลือกสินค้าได้จากแคตาล็อกสินค้า ราชาการพิมพ์ มีตัวเลือกสิ่งพิมพ์หลากหลายชนิด รับพิมพ์งานทั้งในไทยและต่างประเทศ ได้มาตรฐานระดับสากล'
            },
            { 
                header: 'รอรับการติดต่อ',
                content: 'เรามีเจ้าหน้าที่คอยดูแลลูกค้าคนพิเศษ และมีการรับพิมพ์งานตลอด 24 ชั่วโมง เราจะยืนยันคำสั่งซื้อทางโทรศัพท์หรืออีเมลล์ติดต่อที่ลูกค้าได้ให้ไว้'
            },
            { 
                header: 'ชำระเงิน',
                content: 'เมื่อได้รับการยืนยันคำสั่งซื้อ ลูกค้าสามารถเลือกชำระสินค้าตามช่องทางต่างๆได้ถึง x ช่องทาง'
            },
            { 
                header: 'รับสินค้าส่งตรงจากโรงพิมพ์',
                content: 'ราชาปริ้นติ้งเป็นพาร์ทเนอร์กับโลจิสติกส์ชั้นนำ สินค้าจะถูกส่งถึงมือของลูกค้าอย่างรวดเร็วและปลอดภัย ลูกค้าสามารถเลือกจัดส่งด่วน และรอรับสินค้าภายใน 2 วัน หลังการผลิต'
            }
        ]
        return (<div className={'wrapper'}>
                <div className={'header'}>สั่งซื้อกับเราเพียง 4 ขั้นตอนง่ายๆ</div>
                {steps.map((step, key) => {
                    return (<div className={'step-wrapper'}>
                        <div className={'index'}>Step {key + 1}</div>
                        <div className={'content-wrapper'}>
                            <div className={'header'}>{step.header}</div>
                            <div className={'content'}>{step.content}</div>
                        </div>
                    </div>);
                })}
                
            </div>);
    }
}

export default HowTo;