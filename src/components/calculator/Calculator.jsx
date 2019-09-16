import React, { Component } from 'react'
import './Calculator.scss'
import Display from './components/Display'
import Button from './components/Button'

const initialState ={
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [ 0, 0 ],
    current: 0
}

export default class Calculator extends Component{
    state = { ...initialState }

    constructor(props){
        super(props)
        this.addDigit = this.addDigit.bind(this)
        this.setOperator = this.setOperator.bind(this)
        this.clearDisplay = this.clearDisplay.bind(this)
    }

    addDigit(digit){
       if(digit === '.' && this.state.displayValue.includes('.'))
           return

       const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
       const currentValue = clearDisplay ? '' : this.state.displayValue
       const displayValue = currentValue + digit

       this.setState({ displayValue, clearDisplay: false })
    }
    setOperator(operator){
        console.log(operator)
    }
    clearDisplay(){
      this.setState({ ...initialState })
    }

    render(){
        return(
            <div>
                <div className="cal">
                    <Display value={ this.state.displayValue } />

                    <Button label="AC" click={ this.clearDisplay } />
                    <Button label="<=" click={ this.setOperator } />
                    <Button label="" click={ this.setOperator } />
                    <Button label="/" click={ this.setOperator }  operators />

                    <Button label="7" click={ this.addDigit } />
                    <Button label="8" click={ this.addDigit } />
                    <Button label="9" click={ this.addDigit } />
                    <Button label="*" click={ this.setOperator } operators  />

                    <Button label="4" click={ this.addDigit } />
                    <Button label="5" click={ this.addDigit } />
                    <Button label="6" click={ this.addDigit } />
                    <Button label="-" click={ this.setOperator } operators  />

                    <Button label="1" click={ this.addDigit } />
                    <Button label="2" click={ this.addDigit } />
                    <Button label="3" click={ this.addDigit } />
                    <Button label="+" click={ this.setOperator } operators  />

                    <Button label="0" click={ this.addDigit } grid2 />
                    <Button label="." click={ this.addDigit } />
                    <Button label="=" click={ this.setOperator } operators  />
                </div>

                <p className="title">React Calculator</p>
            </div>
        )
    }
}