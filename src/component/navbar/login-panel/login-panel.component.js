import React, {Component} from 'react';
import './login-panel.style.scss';
import Auth from '../../shared/services/auth';

class LoginPanel extends Component {
    constructor(props) {
        super(props);
    }

    renderButton(user, login, logout) {
        return (<div className={'wrapper login-wrapper'}>
            {!!user ? (<div className={'button'} onClick={() => logout()}>{'Logout'}</div>) 
            : (<div className={'button'} onClick={() => login()}>{'Facebook Login'}</div>)}
        </div>);
    }

    render() {
        const { user, login, logout } = this.props;
        return (<div>
            {this.props.show ? this.renderButton(user, login, logout) : null}
        </div>)
    }
}

export default LoginPanel;