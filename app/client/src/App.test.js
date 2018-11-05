import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import { shallow, mount, render } from 'enzyme'
import App from './App'

describe('App component test', () => {
    const component = shallow(<App />)

    it('expects render as expected', () => {
        expect(render(component))
    })

    it('expects find .App component', () => {
        expect(component.find('.App'))
    })

    it('expects .App component has just 2 child elements', () => {
        expect(component.find('.App').children().length).toEqual(2)
    })

    it('expects .App-header has just 2 child elements', () => {
        expect(component.find('.App-header').children().length).toEqual(2)
    })

    it('expects initial messages state to be instance of Array', () => {
        const messagesState = component.state().messages

        expect(messagesState instanceof Array).toEqual(true)
    })

    it('expects initial messages state to be empty array', () => {
        const messagesState = component.state().messages

        expect(messagesState.length).toEqual(0)
    })
})