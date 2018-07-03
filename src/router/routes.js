import Home from '../components/Home'
import User from '../components/user/User'
import Login from '../components/Login'


export const routes = [{
        path: '/',
        name: 'homeLink',
        component: Home

    }, {
        path: '/user',
        name: 'userLink',
        component: User
    },
    {
        path: '/login',
        component: Login
    }
]