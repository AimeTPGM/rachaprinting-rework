import React, { Component } from 'react';
import './navbar.style.scss'
import LoginPanel from './login-panel/login-panel.component';
import Auth from '../shared/services/auth';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { showLogin: false, user: null }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    toggleDropDown() {
        this.refs.navMenu.classList.toggle('is-active')
    }

    toggleLogin() {
        this.setState(prevState => ({
            showLogin: !prevState.showLogin
        }));
    }

    async login() {
        const user = await Auth.login();
        this.setState({ user: user })
    }
    async logout() {
        await Auth.logout();
        this.setState({user: null}) 
    }

    renderButton(user) {
        return !!user ? 'สวัสดี ' + this.state.user.displayName : 'สมัครสมาชิก / เข้าสู่ระบบ'; 
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
                        <a className={'navbar-item custom-menu-item'} href={'/howto'}>
                            วิธีการสั่งซื้อ
                        </a>
                        <a className={'navbar-item custom-menu-item'} href={'/catalog'}>
                            สั่งซื้อสินค้า
                        </a>
                        <a className={'navbar-item custom-menu-item'} href={'/paymentmethod'}>
                            ช่องทางการชำระเงิน
                        </a>
                        <a className={'navbar-item custom-menu-item'} href={'/contact'}>
                            ติดต่อเรา
                        </a>
                        </div>

                        <div className={'navbar-end'}>
                        <div className={'navbar-item'}>
                            <div className={'buttons'}>
                            <a className={'button custom-button'} onClick={() => this.toggleLogin()}>
                                {this.renderButton(this.state.user)}
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
                <div className={'login-panel-wrapper'}>
                    <LoginPanel show={this.state.showLogin} login={this.login} logout={this.logout} user={this.state.user} />
                </div>
            </div>
        );
    }
}

export default Navbar;