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

    clearDisplay(){
        this.setState({ ...initialState })
    }

    removeDigit(){
    }

    addDigit(digit){
       if(digit === '.' && this.state.displayValue.includes('.')){
           return
       }

       const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
       const currentValue = clearDisplay ? '' : this.state.displayValue
       const displayValue = currentValue + digit

       this.setState({ displayValue, clearDisplay: false })

       if(digit !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [ ...this.state.values ]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
       }
    }
    setOperator(operation){
        if(this.state.current === 0){
            this.setState({ operation, current: 1, clearDisplay: true })
        }
        else{
            const equals = operation === '='
            const currentOperation = this.state.operation
            const values = [ ...this.state.values ]

            switch(currentOperation){
                case '+' : values[0] = values[0] + values[1]
                    break
                case '-' : values[0] = values[0] - values[1]
                    break
                case '*' : values[0] = values[0] * values[1]
                    break
                case '/' : values[0] = values[0] / values[1]
                    break
                default : return 
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    render(){
        return(
            <div>
                <div className="cal">
                    <Display value={ this.state.displayValue } />

                    <Button label="AC" click={ this.clearDisplay } />
                    <Button label="" click={ this.removeDigit } />
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