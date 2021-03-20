import React from 'react'

class RotarySwitch extends React.Component {
    constructor(props) {
        super(props);
        this.el_switch = null;
        this.el_primerButton = null;
        this.switchGroup = null; //identify svg group for conditionally setting the switch default/OFF position to vertical
        this.tl_rotateSwitch= new TimelineMax({ paused: true }); // eslint-disable-line
        this.handleClick = () => {this.props.onSwitchEvent(this.props.id);};
        this.primerButtonPressed = () => {this.props.onSwitchEvent(this.props.id);};
        this.primerButtonReleased = () => {this.props.onSwitchEvent(this.props.id);};
    }

    componentDidMount() {
        TweenMax.set(this.el_switch, {transformOrigin: 'center'}); // eslint-disable-line
        
        //if switch is a bypass switch then OFF position is vertical
        if (this.props.id.indexOf('bypass') > -1) {
            TweenMax.set(this.switchGroup, {transformOrigin: 'center', rotate: 90}); // eslint-disable-line
        }

        this.tl_rotateSwitch.to(this.el_switch, 0.5, {rotate: 90});
    }

    render() {
        if (this.props.switchedOn) {
            this.tl_rotateSwitch.play();
        } else if (!this.props.switchedOn) {
            this.tl_rotateSwitch.reverse();
        }

        let renderPrimerButton = () => {
            if (this.props.id === 'crossfeed_primer_button') {
                return <g id="crossfeed_primer_btn" className="rotary_switch" ref={primerButton => this.el_primerButton = primerButton} onMouseDown={this.primerButtonPressed} onMouseUp={this.primerButtonReleased}>
                        <path d="M317.74,487.21a9.68,9.68,0,1,0,13.55-2.07,9.66,9.66,0,0,0-13.55,2.07Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-21)"/>
                        <path id="button" d="M325.54,498.1a5.16,5.16,0,1,0-5.16-5.16,5.19,5.19,0,0,0,5.16,5.16Z" transform="translate(-4.51 -14.6)" fill="#333" stroke="#666" strokeMiterlimit="10" strokeWidth="0.77" fillRule="evenodd"/>
                        </g>
            }
        }
        
        return (
            <g>
                <g ref={rotarySwitch => this.el_switch = rotarySwitch} id={this.props.id} className="rotary_switch" transform={this.props.transform} onClick={this.handleClick} visibility={this.props.id === 'crossfeed_primer_button' ? "hidden" : "visible"}>
                    <path d="M100.23,502.5a16.6,16.6,0,1,0-16.61,16.59,16.63,16.63,0,0,0,16.61-16.59Z" transform="translate(-4.51 -14.6)" fill="#4d4d4d" stroke="#1c1c1c" strokeLinejoin="round" strokeWidth="0.99" fillRule="evenodd"/>
                    <g className="switch-group" ref={switchGroup => this.switchGroup = switchGroup}>
                        <path d="M98.87,505l-14,4.79a5.44,5.44,0,0,1-2.44,0c-5-1.7-10-3.4-14.91-5.13a1,1,0,0,1-.65-.77,9.59,9.59,0,0,1,0-2.78,1,1,0,0,1,.68-.76c5-1.73,10-3.46,14.91-5.22a5.44,5.44,0,0,1,2.44.06q7.44,2.55,14.88,5.16a.9.9,0,0,1,.65.76,9.25,9.25,0,0,1,0,2.78,1.12,1.12,0,0,1-.65.77Z" transform="translate(-4.51 -14.6)" fill="#333" fillRule="evenodd"/>
                        <path d="M98.87,504.57l-14,4a5.9,5.9,0,0,1-2.44,0c-5-1.42-10-2.87-14.91-4.31a.85.85,0,0,1-.65-.63,6.7,6.7,0,0,1,0-2.32.92.92,0,0,1,.68-.65c5-1.45,10-2.89,14.91-4.37a7.14,7.14,0,0,1,2.44,0l14.88,4.34a.85.85,0,0,1,.65.65,6.46,6.46,0,0,1,0,2.32,1,1,0,0,1-.65.63Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.51"/>
                        <path d="M100.4,504.4H66.9c-.05-.62-.08-1.27-.08-1.9s0-1.27.08-1.9h33.5a16.46,16.46,0,0,1,0,3.8Z" transform="translate(-4.51 -14.6)" fill="red" stroke="#d1d1d1" strokeMiterlimit="10" strokeWidth="0.5"/>
                    </g>
                </g>
                {renderPrimerButton()}
            </g>
        );
    }
}

export default RotarySwitch;