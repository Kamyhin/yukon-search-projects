import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receivingData } from '../../actions'


class App extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.actions.receivingData();
    }

    render() {
        return (
            <div>Yukon search projects</div>
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
