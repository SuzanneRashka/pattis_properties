import React from 'react';
import './style.css';

const Clients = props => (

    <div>
        <form>
            <div class="row">
                <div class="col">
                    <input type="text" id="price" class="form-control" placeholder="price" />
                </div>
                <div class="col">
                    <input type="text" id="dwnpmt" class="form-control" placeholder="down payment" />
                </div>
                <div class="col">
                    <input type="text" id="net" class="form-control" placeholder="net" />
                </div>
                <div class="col">
                    <input type="text" id="gross" class="form-control" placeholder="gross" />
                </div>
            </div>
            <button id="submit" class="btn btn-sm pull-right">Submit!</button>
        </form>
    </div>

);

export default Clients;