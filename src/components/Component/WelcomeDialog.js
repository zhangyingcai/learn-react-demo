import React from 'react'
import './WelcomeDialog.css'

function FancyBorder(props) {
    const { color, children } = props
    return (
        <div className={'FancyBorder-' + color}>
            {
                children
            }
        </div>
    )
}

// export class WelcomeDialog extends React.Component {
//     render() {
//         return <FancyBorder color="green">
//         <h1>标题</h1>
//         <p>message</p>
//     </FancyBorder>
//     }
// }

class Dialog extends React.Component {
    render() {
        const { color, title, message } = this.props
        return (
            <FancyBorder color={color}>
                <h1>{title}</h1>
                <p>{message}</p>
            </FancyBorder>
        )
    }
}

export class WelcomeDialog extends React.Component {
    render() {
        return <Dialog
            title="welcome"
            message="dou ni wan"></Dialog>
    }
}