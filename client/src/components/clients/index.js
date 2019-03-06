import React from 'react';
import './style.css';


class Clients extends React.Component {

    constructor(props) {
        super(props)
        this.state = { clients: [] }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        var data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name
        }
        console.log(data);
        fetch("/clients", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(function (response) {
            if (response.status > 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            console.log(data)
            if (data === "success") {
                this.setState({ msg: "Thanks for registering" });
            }
        }).catch(function (err) {
            console.log(err)
        });
    }
    logChange(e) {
        this.setState({ [e.target.first_name]: e.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} method="POST">
                    <div class="row">
                        <div class="col">
                            <input type="text" id="first-name" class="form-control" placeholder="First name" />
                        </div>
                        <div class="col">
                            <input type="text" id="last-name" class="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <button id="submit" class="btn btn-sm pull-right">Submit!</button>
                </form>
                <div>
                    Hello World
                    <ul>
                        {this.state.posts.map(post => <li><h2>{post.title}</h2><p>{post.body}</p></li>}
                    </ul>
                </div>
            </div>
        )
    }
};

export default Clients;