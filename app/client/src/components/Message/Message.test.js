import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import { shallow, mount, render } from 'enzyme'
import Message from './Message'

describe('App component test', () => {
    const component = shallow(<Message />)

    it('should rendered as expected', () => {
        render(component)
    })

    it('expects find .App-message component', () => {
        expect(component.find('.App-message'))
    })
})
