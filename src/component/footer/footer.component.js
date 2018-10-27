import React, { Component } from 'react';

class Footer extends Component {

    renderItemLink(item) {
        return (<div><a href={item.itemLink}>{item.itemName}</a></div>);
    }

    renderItemWithoutLink(item) {
        return (<div>{item.itemName}</div>);
    }
    render () {
        const footerData = [
            {
                header: 'About Us',
                items: [
                    { itemName: 'เกี่ยวกับราชาปริ้นติ้ง', itemLink: '/AboutUs' }
                ]
            },
            {
                header: 'Link',
                items: [
                    { itemName: 'สั่งซื้อกับเราอย่างไร?', itemLink: '/Howto' }
                ]
            },
            {
                header: 'Contact Us',
                items: [
                    { itemName: 'โทรศัพท์' },
                    { itemName: 'email' },
                    { itemName: 'ที่อยู่' },
                    { itemName: 'facebook' },
                    { itemName: 'line' },
                    { itemName: 'ig' },
                    { itemName: 'mini google map' }
                ]
            }

        ]
        return (<div className={'wrapper'}>
            {footerData.map( data => {
                return (<div className={'column'}>
                        <div className={'header'}>{data.header}</div>
                        {data.items.map(item => {
                            return !!item.itemLink ? this.renderItemLink(item) : this.renderItemWithoutLink(item)
                        })}
                    </div>)
            })}
            
        </div>);
    }
}

export default Footer;