import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import { shallow, mount, render } from 'enzyme'
import AddForm from './AddForm'

test('App component should rendered as expected', () => {
    const component = shallow(<AddForm />)
    console.log(component)
})