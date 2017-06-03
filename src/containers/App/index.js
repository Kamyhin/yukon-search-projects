import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'underscore'
import { receivingData } from '../../actions'
import Card from '../../components/Card'

import './style.css'

class App extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.actions.receivingData();
    }

    renderCard(){
        return _.map(this.props.projects, (num, key) => {
            return <Card key={key} project={num}/>
        })
    }

    render() {
        return (
            <div className="wrap">
                {this.renderCard()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            receivingData: () => dispatch(receivingData())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
