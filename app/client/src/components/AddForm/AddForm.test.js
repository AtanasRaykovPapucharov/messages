import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import { shallow, mount, render } from 'enzyme'
import AddForm from './AddForm'

describe('App component test', () => {
    const component = shallow(<AddForm />)

    it('should rendered as expected', () => {
        render(component)
    })

    it('expects find .App-form component', () => {
        expect(component.find('.App-form'))
    })
})
