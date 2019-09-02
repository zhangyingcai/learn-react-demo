//  这是一个输入任意字符都会将字符转换为 * 的input的组件
import React from 'react'

export class ChatInput extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            revalue: ''
        }
        this.stutes = false
    }
    valueOnChange(e) {
        let text = e.target.value;
        console.log(text)
        if(text.length){
            if (!this.stutes) {
                let arr = text.split('');
                let chat = arr[text.length-1];
                arr[text.length-1] = '*'
                text = arr.join('')

                this.setState({
                    value: text,
                    revalue: text.length > this.state.revalue.length ? this.state.revalue+chat : this.state.revalue.substring(0, this.state.revalue.length-1)
                })
            } else {
                this.setState({
                    value:text,
                    revalue: text
                })
            }
        }else{
            this.setState({
                value: '',
                revalue: ''
            })
        }
    }   
    showPassword(){
        this.stutes = ! this.stutes
        if (this.stutes) {
            this.pd = this.state.value;
            this.setState({
                value: this.state.revalue
            })
        } else {
            this.setState({
                value: this.pd
            })
        }
    }
    render() {
        const { value } = this.state;
        return(
            <div>
                <input type="text" value={value} onChange={e=>this.valueOnChange(e)} ></input>
                <button onClick={()=>this.showPassword()}>{this.stutes ? 'hidden' : 'show'}</button>
            </div>
        )
    }
}