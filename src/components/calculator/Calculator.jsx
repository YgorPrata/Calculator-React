import React, { Component } from 'react'
import './Calculator.scss'
import Display from './components/Display'
import Button from './components/Button'

export default class Calculator extends Component{
    render(){
        return(
            <div>
                <div className="cal">
                    <Display value="100" />
                    <Button label="AC" />
                    <Button label="<" />
                    <Button label="<" />
                    <Button label="/"  operators= { true } />
                    <Button label="7" />
                    <Button label="8" />
                    <Button label="9" />
                    <Button label="*" operators= { true }  />
                    <Button label="4" />
                    <Button label="5" />
                    <Button label="6" />
                    <Button label="-" operators= { true }  />
                    <Button label="1" />
                    <Button label="2" />
                    <Button label="3" />
                    <Button label="+" operators= { true }  />
                    <Button label="0" grid2={ 2 } />
                    <Button label="."  />
                    <Button label="=" operators= { true }  />
                </div>

                <p className="title">React Calculator</p>
            </div>
        )
    }
}