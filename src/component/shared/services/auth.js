
import firebase from 'firebase';

const auth = firebase.auth;
const provider = new firebase.auth.FacebookAuthProvider()
const user = null
const Auth = {
    login() {
        return new Promise((resolve, reject) => {
            auth().signInWithPopup(provider)
            .then(data => {
                this.storeUser(data.user)
                return resolve(data.user)
            })
        })
        
    },
    logout() {
        return new Promise((resolve, reject) => {
            auth().signOut()
            .then(data => {
                return resolve()
            })
        })
    },
    storeUser(user) {
        this.user = user;
        console.log('stored user=', user)
    },
    getUser() {
        return this.user;
    }
};

export default Auth;