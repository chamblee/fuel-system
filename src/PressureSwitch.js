import React from 'react'

class PressureSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.rod = null;
        this.spring = null;
        this.back = null;
        this.tl= new TimelineMax({ paused: true }); // eslint-disable-line
    }

    componentDidMount() {
        this.tl.to(this.back, {fill: '#99ffa8', duration: 0.2}, "+=0.1")
        .to(this.spring, {scaleX: 1.35, duration: 0.2})
        .to(this.rod, {x:2, duration: 0.2})
    }
    
    render() {
        if (this.props.fuelPresent) {
            this.tl.play();
        } else if (!this.props.fuelPresent) {
            this.tl.reverse();
        }
        
        return (
            <g id={this.props.id} transform={this.props.transform} className="pressureSwitch">
                <rect ref={back => this.back = back} x="126.52" y="10.74" width="18.04" height="9.77" rx="1.44" fill="#4f4f4f" stroke="#949494" strokeLinecap="round" strokeLinejoin="round"/>
                <g ref={rod => this.rod = rod}>
                    <line id="barV" x1="139.47" y1="11.68" x2="139.47" y2="19.59" fill="none" stroke="#949494" strokeLinecap="round" strokeLinejoin="round"/>
                    <line id="barH" x1="133.61" y1="15.62" x2="138.55" y2="15.62" fill="none" stroke="#949494" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g id="lines" ref={spring => this.spring = spring} stroke="#949494">
                    <line x1="128.2" y1="12.16" x2="128.2" y2="19.03" fill="none" strokeLinejoin="round"/>
                    <line x1="129.66" y1="12.16" x2="129.66" y2="19.03" fill="none" strokeLinejoin="round"/>
                    <line x1="131.07" y1="12.16" x2="131.07" y2="19.03" fill="none" strokeLinejoin="round"/>
                    <line x1="132.56" y1="12.16" x2="132.56" y2="19.03" fill="none" strokeLinejoin="round"/>
                </g>
                <polygon points="136.88 12.66 136.88 11.6 137.8 12.13 138.72 12.66 137.8 13.19 136.88 13.72 136.88 12.66" fill="#949494" fillRule="evenodd"/>
            </g>
        );
    }
}

export default PressureSwitch;