import React from 'react'

class ToggleSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {this.props.onSwitchEvent(this.props.id);}
    }

    render() {
        return (
            <g id={this.props.id} transform={this.props.transform} onClick={this.handleClick}>
                <g>
                    <circle cx="52.43" cy="448.67" r="8.71" fill="url(#radial-gradient-157)"/>
                    <polygon points="60.34 444.19 52.49 439.66 44.65 444.19 44.65 453.24 52.49 457.77 60.34 453.24 60.34 444.19" fillRule="evenodd" fill="url(#radial-gradient-158)"/>
                    <circle cx="52.43" cy="448.67" r="7.64" stroke="#5e5e5e" strokeMiterlimit="10" fill="url(#radial-gradient-159)"/>
                    <circle cx="52.43" cy="448.67" r="6.38" stroke="#5e5e5e" strokeMiterlimit="10" strokeWidth="2" fill="url(#radial-gradient-160)"/>
                    <circle cx="52.54" cy="448.74" r="4.95" stroke="#a0a0a0" strokeMiterlimit="10" strokeWidth="0.75" fill="url(#radial-gradient-161)"/>
                    <circle cx="52.63" cy="448.83" r="3.06" fill="#5b5b5b"/>
                </g>
                <path className="toggle_switch OFF_position" visibility={this.props.switchedOn ? "hidden" : "visible"} d="M60.9,456.48a3.92,3.92,0,0,0-4-3.83,3.65,3.65,0,0,0-4,3.83c0,3,2.39,6.89,4,6.89C58.81,463.37,60.9,459.44,60.9,456.48Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-162)"/>
                <path className="toggle_switch ON_position" visibility={this.props.switchedOn ? "visible" : "hidden"} d="M53,469.21a3.93,3.93,0,0,0,4,3.84,3.66,3.66,0,0,0,4-3.84c0-3-2.39-6.89-4-6.89C55.07,462.33,53,466.25,53,469.21Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-163)"/>
            </g>
        );
    }
}

export default ToggleSwitch;