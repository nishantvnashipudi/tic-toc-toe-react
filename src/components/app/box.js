import React from 'react';

const Box = props => (
    <div className={props.className} key={props.keys} onClick={props.onClick}>{props.value}</div>
)

export default Box;