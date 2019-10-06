import {Two} from './two'
import {SocialNetwork} from './social-network'
import * as _ from 'lodash'

import './decorators' 
const arr= [];

class Soc implements SocialNetwork {
    title = 'eggheads!' 
    getUsers() {
        return [
            { name : ''  }
        ]
    }
}
class App {
    name = 'stupid'
    constructor () {
        console.log('constructor was started!')
    }
}
const app = new App()
const two = new Two
