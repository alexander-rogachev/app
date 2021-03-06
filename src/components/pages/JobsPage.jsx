import React from 'react'
import { inject, observer } from 'mobx-react'

@inject("store") @observer
export default class JobsPage extends React.Component {

    componentWillMount() {
        this.props.store.filters.fetchData()
    }

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        const jobs = this.store.jobs;
        const filters = this.store.filters;
        return (
            <div>
                <div>Jobs</div>
                {jobs.items.map(item =>
                    <div key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.publishDate}</div>
                        <div>{item.jobName}</div>
                    </div>
                )}
                <div>Filters</div>
                {filters.items.map(item =>
                    <div key={item.id}>
                        <div>{item.id}</div>
                    </div>
                )}
            </div>
        )
    }

}