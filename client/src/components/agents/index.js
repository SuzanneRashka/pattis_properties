import React from 'react';
import './style.css';

const Agents = props => (

    <div>
        <form>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder=" agent one" />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="agent two" />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="agent three" />
                </div>
            </div>
            <button id="submit" class="btn btn-sm pull-right">Submit!</button>
        </form>
    </div>

);

export default Agents;