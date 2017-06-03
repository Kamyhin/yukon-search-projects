import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore'
import moment from 'moment';

import './css/style.css'


export default class Card extends Component {

    constructor(props) {
        super(props)
    }

    getFromTime = (time) => {
        moment.locale('ru');
        let date = new Date() - time;
        return moment(date).fromNow();
    };

    getLang = (lang) => {
        if (lang) {
            return _.map(lang, (num, key) => {
                return <span className="card__lang-span" key={key}>{num.title}</span>
            })
        }
    };

    getSkill = (skill) => {
        if (skill) {
            return _.map(skill, (num) => {
                return num.title + ', '
            })
        }
    };

    render() {
        const {project} = this.props;
        return (
            <div className="card">
                <h3 className="card__title">{project.title}</h3>
                <hr/>
                <div className="card__desc">{project.description}</div>
                <div className="card__lang">{this.getLang(project.info.lang)}</div>
                <div className="card__skill">{this.getSkill(project.info.skill)}</div>
                <div className="card__date">{this.getFromTime(project.ctime)}</div>
                <div className="card__summary">{project.reward_amount}</div>
                <div className="card__look">{project.views_counter}</div>
            </div>
        )
    }
}

Card.propTypes = {
    project: PropTypes.object.isRequired
};