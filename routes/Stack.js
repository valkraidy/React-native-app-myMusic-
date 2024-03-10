import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer }  from 'react-navigation'
import Welcome from '../screens/SelectLocation'
import SignUp from '../screens/SignUp'


const screens = {
    Home:{
        screen: Welcome
    },
    Sign:{
        screen: SignUp
    },
}

const Stack = createStackNavigator(screens)

export default createAppContainer(Stack)