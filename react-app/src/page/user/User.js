import React, { Component } from 'react';

class User extends Component {
    render() {
        console.log(this.props.match.params)
        return (
            <h1>User{this.props.match.params.id}{this.props.match.params.username}</h1>
    )
    }
}

export default User;