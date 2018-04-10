import BaseComponent from '../BaseComponent';
import * as React from 'react';
import Icon from 'antd/lib/icon';
export default class Message extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        {
            let arr = [1, 2, 3].map(ele => {
                return (<li key={ele}>{ele}</li>);
            });
            return (
                <div>
                <ul><Icon type="step-backward" />{arr}</ul>
            </div>);
        }
    }
}