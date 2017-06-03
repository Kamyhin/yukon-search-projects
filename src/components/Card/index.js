/**
 * Created by Alexander Kamyhin on 03.06.2017.
 */
import React, { Component, PropTypes } from 'react';
import _ from 'underscore'
import moment from 'moment';

import './card.css'


export default class Card extends Component {

    constructor(props) {
        super(props)
    }

    renderInfo(time){
        moment.locale('ru');
        return moment(time).fromNow();
    }

    get_lang(lang) {
        if (lang) {
            return _.map(lang, (num, key) => {
                return <span className="card__lang-span" key={key}>{num.title}</span>
            })
        }
    }

    get_skill(skill) {
        if (skill) {
            return _.map(skill, (num, key) => {
                return num.title + ', '
            })
        }
    }

    render() {
        const {project} = this.props;
        console.log(project);
        return (
            <div className="card">
                <h3 className="card__title">{project.title}</h3>
                <hr/>
                <div className="card__desc">{project.description}</div>
                <div className="card__lang">{this.get_lang(project.info.lang)}</div>
                <div className="card__skill">{this.get_skill(project.info.skill)}</div>
                <div className="card__date">{this.renderInfo(project.ctime)}</div>
                <div className="card__summary">{project.reward_amount}</div>
                <div className="card__look">{project.views_counter}</div>
            </div>
        )
    }
}