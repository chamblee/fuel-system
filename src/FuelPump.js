import React from 'react'

class FuelPump extends React.Component {
    constructor(props) {
        super(props);
        this.el = null;
        this.emptyLight = null;
        this.tl= new TimelineMax({paused: true}); // eslint-disable-line
        this.light_tl = new TimelineMax({paused: true}); // eslint-disable-line
        this.handleClick = () => {this.props.onFailEvent(this.props.id, "fuelPumps");};
    }

    componentDidMount() {
        TweenMax.set(this.el, {transformOrigin: 'center'}); // eslint-disable-line
        this.tl.to(this.el, {rotation:"-360", duration: 2, repeat:-1, ease: "none"});

        if (this.props.id.indexOf('AUX') > -1 || this.props.id.indexOf('EXT') > -1) {
            this.light_tl.to(this.emptyLight, {autoAlpha:1, duration:0.5})
            .to(this.emptyLight, {autoAlpha:0, duration:0.75});
        }
    }

    render() {
        if (this.props.fuelPresent) {
            this.tl.play();
            if (this.props.emptyLightStatus === 'flash') {
                this.light_tl.play();
            }
        } else {
            this.tl.pause();
            this.light_tl.pause(0);
        }

        let renderTankEmptyLights = () => {
            if (this.props.id === 'pump_left_AUX') {
                return <text ref={emptylight => this.emptyLight = emptylight} id="left_aux_empty_light" visibility="hidden" transform="translate(91.5 400.5)" fontSize="3.83" fill="#f7d417" fontFamily="ArialNarrow-Bold, Arial" fontWeight="700"><tspan letterSpacing="0.01em">AUX</tspan><tspan x="-1.01" y="4.59">TANK</tspan><tspan x="-2.06" y="9.18">EMPTY</tspan></text>
            } else if (this.props.id === 'pump_right_AUX') {
                return <text ref={emptylight => this.emptyLight = emptylight} id="right_aux_empty_light" visibility="hidden" transform="translate(224 400.5)" fontSize="3.83" fill="#f7d417" fontFamily="ArialNarrow-Bold, Arial" fontWeight="700"><tspan letterSpacing="0.01em">AUX</tspan><tspan x="-1.01" y="4.59">TANK</tspan><tspan x="-2.06" y="9.18">EMPTY</tspan></text>
            } else if (this.props.id.indexOf('left_EXT') > -1) {
                return <text ref={emptylight => this.emptyLight = emptylight} id="left_ext_empty_light" visibility="hidden" transform={this.props.id.indexOf('AFT') > -1 ? "translate(345 293)" : "translate(266 293)"} fontSize="3.83" fill="#f7d417" fontFamily="ArialNarrow-Bold, Arial" fontWeight="700">EXT<tspan x="-1.3" y="4.59">TANK</tspan><tspan x="-2.35" y="9.18">EMPTY</tspan></text>
            } else if (this.props.id.indexOf('right_EXT') > -1) {
                return <text ref={emptylight => this.emptyLight = emptylight} id="right_ext_empty_light" visibility="hidden" transform={this.props.id.indexOf('AFT') > -1 ? "translate(-19.75 293)" : "translate(40 293)"} fontSize="3.83" fill="#f7d417" fontFamily="ArialNarrow-Bold, Arial" fontWeight="700">EXT<tspan x="-1.3" y="4.59">TANK</tspan><tspan x="-2.35" y="9.18">EMPTY</tspan></text>
            }
        }
        
        return (
            <g id={this.props.id} transform={this.props.transform} onClick={this.handleClick}>
                <rect x="150.87" y="161.77" width="16.92" height="15.82" rx="3.6" fill={this.props.fuelPresent ? "#00ff05" : "#cad0dd"} stroke={this.props.failed ? "#f00" : "#000002"} strokeMiterlimit="2.61" strokeWidth="0.25"/>
                <circle cx="159.26" cy="169.76" r="1.31" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.25"/>

                <g className="motor" ref={motor => this.el = motor}>
                    <g>
                    <path d="M163.74,183V178s2.67.71,3.8,2.31c-1,1.15-2.86,3.14-2.86,3.14A1.11,1.11,0,0,0,163.74,183Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.25"/>
                    <path d="M163.66,177.94s1.36,0,4,2.4" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.75"/>
                    </g>
                    <g>
                    <path d="M162.82,183.44l-3.58-3.57s2.39-1.39,4.32-1.05c.08,1.54.2,4.24.2,4.24A1.12,1.12,0,0,0,162.82,183.44Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.25"/>
                    <path d="M159.15,179.9s.94-1,4.51-1.12" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.75"/>
                    </g>
                    <g>
                    <path d="M162.45,184.39h-5.06s.71-2.68,2.31-3.8c1.15,1,3.14,2.86,3.14,2.86A1.11,1.11,0,0,0,162.45,184.39Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.25"/>
                    <path d="M157.35,184.47s0-1.36,2.4-4" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.75"/>
                    </g>
                    <g>
                    <path d="M162.86,185.31l-3.58,3.58s-1.39-2.39-1.05-4.32l4.24-.2A1.11,1.11,0,0,0,162.86,185.31Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.25"/>
                    <path d="M159.31,189s-1-.94-1.12-4.51" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.75"/>
                    </g>
                    <g>
                    <path d="M163.8,185.68v5.06s-2.68-.71-3.8-2.31c1-1.15,2.86-3.14,2.86-3.14A1.11,1.11,0,0,0,163.8,185.68Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.25"/>
                    <path d="M163.88,190.78s-1.36,0-4-2.4" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.75"/>
                    </g>
                    <g>
                    <path d="M164.72,185.27l3.58,3.58s-2.39,1.39-4.32,1.05c-.08-1.54-.2-4.24-.2-4.24A1.11,1.11,0,0,0,164.72,185.27Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.25"/>
                    <path d="M168.39,188.82s-.94,1-4.51,1.12" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.75"/>
                    </g>
                    <g>
                    <path d="M165.09,184.33h5.06s-.71,2.67-2.31,3.8c-1.15-1-3.14-2.86-3.14-2.86A1.11,1.11,0,0,0,165.09,184.33Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.25"/>
                    <path d="M170.19,184.25s0,1.36-2.4,4" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.75"/>
                    </g>
                    <g>
                    <path d="M164.68,183.4l3.58-3.57s1.39,2.39,1.05,4.32l-4.24.2A1.13,1.13,0,0,0,164.68,183.4Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.25"/>
                    <path d="M168.23,179.74s1,.94,1.12,4.51" transform="translate(-4.51 -14.6)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="0.75"/>
                    </g>
                </g>

                <path className="failedIcon" visibility={this.props.failed ? "visible" : "hidden"} d="M127.62,93.62a7,7,0,1,0,0,9.86A6.93,6.93,0,0,0,127.62,93.62Zm-9.1.77a5.86,5.86,0,0,1,4.17-1.73,5.92,5.92,0,0,1,3.3,1l-8.18,8.18a5.89,5.89,0,0,1,.71-7.46Zm8.33,8.32a5.88,5.88,0,0,1-7.46.72l8.17-8.18A5.89,5.89,0,0,1,126.85,102.71Z" transform="translate(37 71)" fill="red"/>

                {renderTankEmptyLights()}
            </g>
        );
    }
}

export default FuelPump;