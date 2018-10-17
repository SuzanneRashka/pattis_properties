import React, { Component } from 'react';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
import ContainerForm from '../../components/containerForm/index';
import ContainerView from '../../components/containerView/index';

class Dashboard extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <h1>Dashboard</h1>
                <ContainerForm />
                <ContainerView />
                <Footer />
            </div>
        );
    }
}

export default Dashboard;