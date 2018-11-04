import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import { shallow, mount, render } from 'enzyme'
import Message from './Message'

test('App component should rendered as expected', () => {
    const component = shallow(<Message />)
    console.log(component)
})