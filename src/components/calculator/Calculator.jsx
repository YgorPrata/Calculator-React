import React, { Component } from 'react'
import './Calculator.scss'
import Display from './components/Display'
import Button from './components/Button'

export default class Calculator extends Component{

    constructor(props){
        super(props)
        this.addDigit = this.addDigit.bind(this)
    }

    addDigit(digit){
        console.log(digit)
    }
    setOperator(operator){
        console.log(operator)
    }
    clearDisplay(){
        console.log('clean')
    }

    render(){
        return(
            <div>
                <div className="cal">
                    <Display value="100" />

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