import React from 'react';
import './style.css';

const Clients = props => (

    <div>
        <form>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="price" />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="down payment" />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="net" />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="gross" />
                </div>
            </div>
        </form>
    </div>

);

export default Clients;