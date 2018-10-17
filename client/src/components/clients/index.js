import React from 'react';
import './style.css';

const Clients = props => (

    <div>
        <form>
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
    </div>

);

export default Clients;