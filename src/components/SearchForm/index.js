import React, { Component, PropTypes } from 'react';


import './search-form.css'


export default class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            type: "select"
        }
    }

    submitForm = () => {
        let value = this.state.value ? `%${this.state.value}%` : "";
        let type = this.state.type !== "select" ? [this.state.type] : "";
        this.props.actions.receivingData(type, value)
    };

    changeInput = (event) => {
        this.setState({
            value:event.target.value
        })
    };

    changeSelect = (event) => {
        this.setState({
            type: event.target.value
        })
    };

    render() {
        return (
            <div className="search-from">
                <input type="text" className="search-form__input" onChange={this.changeInput}/>
                <input type="submit" value="Поиск" className="search-form__button" onClick={this.submitForm}/>
                <select onChange={this.changeSelect} value={this.state.type} name="select" id="select" className="search-form__select">
                    <option value="select" disabled>Выберите тип занятости</option>
                    <option value="0">Не важно(0)</option>
                    <option value="1">Полная занятость(1)</option>
                    <option value="2">Частичная занятость(2)</option>
                    <option value="3">Несколько часов в неделю(3)</option>
                </select>
            </div>
        )
    }
}