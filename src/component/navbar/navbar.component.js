import React, { Component } from 'react';
import './navbar.style.scss'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navMenu =  React.createRef();
    }
    toggleDropDown() {
        this.refs.navMenu.classList.toggle('is-active')
    }
    render() {
        return (
            <div>
                <nav className={'navbar simple-green-bg'} role={'navigation'} aria-label={'main navigation'}>
                    <div className={'navbar-brand'}>
                        <a className={'navbar-item'} href={'https://bulma.io'}>
                        
                        </a>
                        
                        <a role={'button'} className={'navbar-burger burger'} aria-label={'menu'} aria-expanded={'false'} data-target={'navbarContent'} onClick={() => this.toggleDropDown()}>
                            <span className={'custom-burger'} aria-hidden={'true'}></span>
                            <span className={'custom-burger'} aria-hidden={'true'}></span>
                            <span className={'custom-burger'} aria-hidden={'true'}></span>
                        </a>
                    </div>

                    <div id={'navMenu'} className={'navbar-menu'} ref={'navMenu'}>
                        <div className={'navbar-start'}>
                        <a className={'navbar-item custom-menu-item'} href={'/'}>
                            หน้าแรก
                        </a>
                        <a className={'navbar-item custom-menu-item'} href={'/'}>
                            วิธีการสั่งซื้อ
                        </a>
                        <a className={'navbar-item custom-menu-item'} href={'/'}>
                            สั่งซื้อสินค้า
                        </a>
                        <a className={'navbar-item custom-menu-item'} href={'/contact'}>
                            ติดต่อเรา
                        </a>
                        </div>

                        <div className={'navbar-end'}>
                        <div className={'navbar-item'}>
                            <div className={'buttons'}>
                            <a className={'button custom-button'}>
                                Sign up
                            </a>
                            <a className={'button custom-button'}>
                                Log in
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
            

        );
    }
}

export default Navbar;