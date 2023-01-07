import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogin: {},
        }
        handleEvent = () => {
            this.setState({
                ...this.state,
                userLogin: {
                    username: "admin",
                    password: "admin123"
                }
            })
        }
    }
    render() {
        return (
            <div>Class Component</div>
        )
    }
}

export default Header;