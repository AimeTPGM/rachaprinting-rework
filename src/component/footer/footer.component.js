import React, { Component } from 'react';
import './footer.component.scss'

class Footer extends Component {

    renderItemLink(item) {
        return (<div className={'item'}><a href={item.itemLink}>{item.itemName}</a></div>);
    }

    renderItemWithoutLink(item) {
        return (<div className={'item'}>{item.itemName}</div>);
    }
    render () {
        const footerData = [
            {
                header: 'About Us',
                items: [
                    { itemName: 'ราชาการพิมพ์ ให้บริการการพิมพ์มา มากกว่า 15 ปี ทั้งยังผลิต และจัดจำหน่าย ภาชนะใส่อาหารและเครื่องดื่ม สำหรับค้าปลีกตามที่ท่านต้องการ และยังมีลวดลายสินค้า ให้ท่านเลือกมากมาย รับพิมพ์งานด่วน บริการออกแบบสื่อสิ่งพิมพ์และรับพิมพ์งานพิมพ์ทุกชนิด'}
                ]
            },
            {
                header: 'Link',
                items: [
                    { itemName: 'เกี่ยวกับเรา', itemLink: '/contact' },
                    { itemName: 'แคตาล็อกสินค้า', itemLink: '/catalog'},
                    { itemName: 'สั่งซื้อกับเราอย่างไร?', itemLink: '/howto' },
                    { itemName: 'ช่องทางการชำระเงิน', itemLink: '/paymentmethod'},
                    { itemName: 'คำถามที่พบบ่อย', itemLink: '/faq' }

                ]
            },
            {
                header: 'Contact Us',
                items: [
                    { itemName: '02-266-3738' },
                    { itemName: '02-266-3739' },
                    { itemName: '02-266-3740' },
                    { itemName: 'fax 02-234-8319' },
                    { itemName: 'rachagroup@email.com' },
                    { itemName: '204/6-7 ถ.สุรวงศ์ แขวงสี่พระยา เขตบางรัก กทม.' },
                    { itemName: 'facebook' },
                    { itemName: 'line' },
                    { itemName: 'ig' },
                    { itemName: 'mini google map' }
                ]
            }

        ]
        return (
            <div className={'green-bg'}>
                <div className={'wrapper'}>
                    <div className={'link-wrapper'}> 
                        {footerData.map( (data,key) => {
                            return (<div className={'column'}>
                                    <div className={'header'}>{data.header}</div>
                                    <div className={'item-wrapper'}> 
                                        {data.items.map((item,key) => {
                                            return !!item.itemLink ? this.renderItemLink(item) : this.renderItemWithoutLink(item)
                                        })}
                                    </div>
                                </div>)
                        })}
                    </div>
                    <div className={'license-wrapper'}>{'©2017 Racha Printing Co., Ltd. All Rights Reserved.'}</div>
                    
                </div>
            </div>
        );
    }
}

export default Footer;