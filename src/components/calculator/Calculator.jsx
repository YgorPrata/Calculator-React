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
                    <Button label="AC" columns="auto" />
                    <Button label="<" columns="auto" />
                    <Button label="<" columns="auto" />
                    <Button label="/" columns="auto" />
                    <Button label="7" columns="auto" />
                    <Button label="8" columns="auto" />
                    <Button label="9" columns="auto" />
                    <Button label="*" columns="auto" />
                    <Button label="4" columns="auto" />
                    <Button label="5" columns="auto" />
                    <Button label="6" columns="auto" />
                    <Button label="-" columns="auto" />
                    <Button label="1" columns="auto" />
                    <Button label="2" columns="auto" />
                    <Button label="3" columns="auto" />
                    <Button label="+" columns="auto" />
                    <Button label="0" columns={ 2 } />
                    <Button label="." columns="auto" />
                    <Button label="=" columns="auto" />
                </div>

                <h1 className="title">React Calculator</h1>
            </div>
        )
    }
}