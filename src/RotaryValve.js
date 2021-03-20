import React from 'react'

class RotaryValve extends React.Component {
    constructor(props) {
        super(props);
        this.el = null;
        this.tl= new TimelineMax({ paused: true }); // eslint-disable-line
        this.handleClick = () => {this.props.onFailEvent(this.props.id, "rotaryValves");};
    }

    componentDidMount() {
        TweenMax.set(this.el, {transformOrigin: 'center'}); // eslint-disable-line
        this.tl.to(this.el, 0.5, {rotate: 90});
    }

    render() {
        if (this.props.open) {
            this.tl.play();
        } else if (!this.props.open) {
            this.tl.reverse();
        }
        
        return (
            <g ref={valve => this.el = valve} id= {this.props.id} onClick={this.handleClick}>
                <path d={this.props.path_1_d} transform="translate(-4.51 -14.6)" fill="#f5e41f" stroke="#e0e0e0" strokeWidth="0.5" fillRule="evenodd"/>
                <line x1={this.props.lineX1} y1={this.props.lineY1} x2={this.props.lineX2} y2={this.props.lineY2} fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                <path className="failedIcon" visibility={this.props.failed ? "visible" : "hidden"} d={this.props.path_2_d} transform="translate(-4.51 -14.6)" fill="red"/>
            </g>
        );
    }
}

export default RotaryValve;