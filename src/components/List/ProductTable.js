import React from 'react'
import './ProductTable.css'

class ProductTable extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const { category, isSocked, list } = this.props
        console.log(category,isSocked,list)
        return (
            <div>
                <p>{category}</p>
                <ul>
                {
                    list.map((item,index)=> 
                        {
                            if (item.category === category){
                                return(
                                    <li key={index}>
                                        <span className={isSocked && item.stocked ? 'red' : ''}>{item.name}</span>
                                        {item.price}
                                    </li>
                                )
                            }
                            return ''
                        })
                }
                </ul>
            </div>
        )
    }
}

export default ProductTable;