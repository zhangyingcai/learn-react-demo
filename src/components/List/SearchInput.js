import React from 'react';

class SearchInput extends React.Component {
    handleRadioChange(e) {
        this.props.handleRadioChange(e.target.checked)
    }
    render() {
        const { isSocked } = this.props;
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                ></input>
                <br></br>
                <input
                    type="checkbox"
                    checked={isSocked}
                    onChange={(e)=>this.handleRadioChange(e)}
                ></input>
                <span>Only show products in stock</span>
            </div>
        )
    }
}

export default SearchInput;