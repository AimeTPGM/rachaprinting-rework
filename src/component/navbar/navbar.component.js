import React, { Component } from 'react';
import './navbar.style.scss'
import LoginPanel from './login-panel/login-panel.component';
import Auth from '../shared/services/auth';
import { Link } from "react-router-dom";

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
                        <Link to='/' className={'navbar-item custom-menu-item'} >
                            หน้าแรก
                        </Link>
                        <Link to='/howto' className={'navbar-item custom-menu-item'} >
                            วิธีการสั่งซื้อ
                        </Link>
                        <Link to='/catalog' className={'navbar-item custom-menu-item'} >
                            สั่งซื้อสินค้า
                        </Link>
                        <Link to='/paymentmethod' className={'navbar-item custom-menu-item'}>
                            ช่องทางการชำระเงิน
                        </Link>
                        <Link to='/contact' className={'navbar-item custom-menu-item'} >
                            ติดต่อเรา
                        </Link>
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
