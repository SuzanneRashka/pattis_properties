import { Tab, TabPanel, Tabs } from '@bsonntag/react-tabs';
import React, { Component } from 'react';
import Clients from '../clients/index';
import Agents from '../agents/index';
import Commissions from '../commissions/index';
import './style.css';

class ContainerForm extends Component {

    state = {
        selectedTab: 0
    };

    handleSelect = selectedTab => this.setState({ selectedTab });

    render() {
        return (
            <Tabs
                onSelect={this.handleSelect}
                selectedTab={this.state.selectedTab}
            >
                <ul id="horizontal-list">
                    <Tab tab={0}>
                        {({ select }) => (
                            <li onClick={select}>
                                {'Client List'}
                            </li>
                        )}
                    </Tab>

                    <Tab tab={1}>
                        {({ select }) => (
                            <li onClick={select}>
                                {'Agent List'}
                            </li>
                        )}
                    </Tab>

                    <Tab tab={2}>
                        {({ select }) => (
                            <li onClick={select}>
                                {'Commissions'}
                            </li>
                        )}
                    </Tab>
                </ul>

                <TabPanel tab={0}>
                    {isSelected => isSelected && (
                        <div>
                            {/*'First tab content'*/}
                            <Clients />
                        </div>
                    )}
                </TabPanel>

                <TabPanel tab={1}>
                    {isSelected => isSelected && (
                        <div>
                            <Agents />
                        </div>
                    )}
                </TabPanel>

                <TabPanel tab={2}>
                    {isSelected => isSelected && (
                        <div>
                            <Commissions />
                        </div>
                    )}
                </TabPanel>
            </Tabs>
        );
    }

}

export default ContainerForm;