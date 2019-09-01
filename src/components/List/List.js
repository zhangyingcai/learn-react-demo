import React from 'react'
import SearchInput from './SearchInput'
import ProductTable from './ProductTable'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSocked: false,
            list: [
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
            ]
        }
    }
    handleRadioChange(value) {
        console.log('update radio', value)
        this.setState({
            isSocked: Boolean(value)
        })
    }
    render() {
        return (
            <div>
                <SearchInput
                    isSocked={this.state.isSocked}
                    handleRadioChange={(v)=>this.handleRadioChange(v)}
                ></SearchInput>
                <ProductTable
                    category="Sporting Goods"
                    isSocked={this.state.isSocked}
                    list={this.state.list}
                ></ProductTable>
                <ProductTable
                    category="Electronics"
                    isSocked={this.state.isSocked}
                    list={this.state.list}
                ></ProductTable>
            </div>
        )
    }
}
export default List