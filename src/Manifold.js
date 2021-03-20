import React from 'react'

class Manifold extends React.Component {
    constructor(props) {
        super(props);
        this.pressureNeedle = null;
        this.pressureChange = false;
        this.fluxChange = false;
    }

    initialize_indicator_timeline() {
        let currentNeedleRotation = gsap.getProperty(this.pressureNeedle, "rotation"); // eslint-disable-line
        let pressNeedleRotation = this.props.psi === 35 ? 220 : this.props.psi === 19 ? 120 : 0;
        let rotationDuration = Math.floor(Math.abs(currentNeedleRotation - pressNeedleRotation) / 30);
        
        this.tl_pressNeedleMove = new TimelineMax({paused: true, onComplete: () => { // eslint-disable-line
            this.end_tl();
        }});
        this.tl_pressNeedleMove.addLabel('startFlux')
        .to(this.pressureNeedle, {rotation: "-=15", duration: 1.5,ease: "Sine.easeOut"})
        .to(this.pressureNeedle, {rotation: "+=15", duration: .8,ease: "Sine.easeOut"})
        .addLabel('endFlux')
        .addLabel('startPressureChange')
        .to(this.pressureNeedle, {rotation: pressNeedleRotation, duration: rotationDuration,ease: "power2.inOut"})
        .addLabel('endPressureChange');
    }

    initialize_fueldump_timeline() {
        this.tl_fuelSpray = new TimelineMax(); // eslint-disable-line
        this.tl_fuelSpray.to(".sprayLine", {strokeDashoffset: -15, duration: 3, repeat: -1, ease: "Sine.easeInOut"});
    }

    end_tl() {
        this.tl_pressNeedleMove.kill();
    }

    componentDidMount() {
        if (this.props.id === 'crossfeed_line2') {
            TweenMax.set(this.pressureNeedle, {transformOrigin: '18.35% 25.02%'}); // eslint-disable-line
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.id === 'crossfeed_line2') {
            this.pressureChange = this.props.psi !== prevProps.psi;
            this.fluxChange = this.props.psiFluxCounter !== prevProps.psiFluxCounter;
            
            if (this.pressureChange) {
                console.log('press change');
            }

            if (this.fluxChange) {
                console.log('flux change');
            }

            this.initialize_indicator_timeline();

            if (this.fluxChange && this.pressureChange) {
                this.tl_pressNeedleMove.play();
            } else if (this.fluxChange) {
                this.tl_pressNeedleMove.tweenFromTo("startFlux", "endFlux");
            } else if (this.pressureChange) {
                this.tl_pressNeedleMove.tweenFromTo("startPressureChange", "endPressureChange");
            }
        }

        if (this.props.id === 'left_dump_line' || this.props.id === 'right_dump_line') {
            this.initialize_fueldump_timeline();
        }
    }

    render() {
        let renderPressureTransmitter = () => {
            if (this.props.id === 'crossfeed_line2') {
              return <g id="pressureXmtr">
                    <circle cx="449.95" cy="77.62" r="6.15" fill={this.props.fuelPresent ? '#00ff05' : 'none'} stroke="#666" strokeMiterlimit="10"/>
                    <polygon points="449.81 75.28 449.1 78.72 450.51 78.72 449.81 75.28" fill="#666"/>
                    <path d="M452.17,89.25c.26.22,0,1-.42,1.52s-1.05,1-1.31.83,0-1.12.49-1.64S451.91,89,452.17,89.25Z" transform="translate(-4.51 -14.6)" fill="#666"/>
                    <line x1="449.95" y1="83.77" x2="449.95" y2="86.24" fill="none" stroke="#666" strokeMiterlimit="10"/>
                    <rect x="443.54" y="85.41" width="13.03" height="13.03" rx="4" fill="#666" stroke={this.props.fuelPresent ? '#00ff05' : '#fff'} strokeMiterlimit="10" strokeWidth="0.5"/>
                    <line x1="445.82" y1="87.2" x2="449.71" y2="87.2" fill="none" stroke={this.props.fuelPresent ? '#00ff05' : '#ccc'} strokeLinecap="round" strokeMiterlimit="10"/>
                    <line x1="457.1" y1="88.68" x2="457.1" y2="95.91" fill="none" stroke="gray" strokeLinecap="round" strokeMiterlimit="10"/>
                    <line x1="442.89" y1="88.68" x2="442.89" y2="95.91" fill="none" stroke="gray" strokeLinecap="round" strokeMiterlimit="10"/>
                    <g id="pressure_indicator">
                        <g id="pressure_indicator_back">
                            <path d="M368.91,422.74a24,24,0,1,1-24,24.05,24.05,24.05,0,0,1,24-24.05Zm0,21.93a2.11,2.11,0,1,1,0,4.21,2.11,2.11,0,0,1,0-4.21Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-9)"/>
                            <path d="M368.91,424.34a22.43,22.43,0,1,1-22.42,22.45,22.45,22.45,0,0,1,22.42-22.45Zm0,20.47a2,2,0,1,1,0,3.93,2,2,0,0,1,0-3.93Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-10)"/>
                            <path d="M368.75,425a21.66,21.66,0,1,1-21.64,21.67A21.68,21.68,0,0,1,368.75,425Zm0,19.76a1.9,1.9,0,1,1,0,3.8,1.9,1.9,0,0,1,0-3.8Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#242424" strokeMiterlimit="10" strokeWidth="0.5" fillRule="evenodd"/>
                        </g>
                        <g id="pressure_indicator_nos">
                            <text transform="translate(378.5 439.27)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">0</text>
                            <text transform="translate(363.97 448.46)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700"><tspan letterSpacing="0.04em">1</tspan><tspan x="2.29" y="0">0</tspan></text>
                            <text transform="translate(350.97 441.57)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700"><tspan letterSpacing="0.04em">2</tspan><tspan x="2.29" y="0">0</tspan></text>
                            <text transform="translate(350.21 426.26)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700"><tspan letterSpacing="0.04em">3</tspan><tspan x="2.29" y="0">0</tspan></text>
                            <text transform="translate(364.74 418.6)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700"><tspan letterSpacing="0.04em">4</tspan><tspan x="2.29" y="0">0</tspan></text>
                            <text transform="translate(376.21 428.56)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700"><tspan letterSpacing="0.04em">5</tspan><tspan x="2.29" y="0">0</tspan></text>
                            <text transform="translate(360.91 422.43)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700"><tspan letterSpacing="-0.11em">F</tspan><tspan x="1.53" y="0" letterSpacing="0.03em">U</tspan><tspan x="3.83" y="0" letterSpacing="0.08em">E</tspan><tspan x="6.12" y="0">L</tspan></text>
                            <text transform="translate(357.09 427.03)" fontSize="4.59" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">P<tspan x="3.06" y="0" letterSpacing="-0.05em">R</tspan><tspan x="6.13" y="0">ESS</tspan></text>
                            <text transform="translate(360.91 440.81)" fontSize="4.59" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">PSI</text>
                        </g>
                        <g id="pressure_indicator_marks">
                            <line x1="381.4" y1="423.8" x2="383.73" y2="422.63" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="380.35" y1="421.95" x2="382.54" y2="420.54" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="379.11" y1="420.25" x2="381.15" y2="418.58" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="377.69" y1="418.67" x2="379.53" y2="416.82" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="374.4" y1="416.09" x2="375.76" y2="413.88" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="372.53" y1="415.07" x2="373.63" y2="412.71" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="370.57" y1="414.27" x2="371.42" y2="411.81" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="368.56" y1="413.71" x2="369.1" y2="411.15" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="364.37" y1="413.25" x2="364.34" y2="410.64" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="362.27" y1="413.39" x2="361.96" y2="410.79" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="360.17" y1="413.73" x2="359.57" y2="411.21" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="358.16" y1="414.33" x2="357.28" y2="411.89" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="354.36" y1="416.17" x2="352.97" y2="413.96" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="352.66" y1="417.39" x2="351.01" y2="415.38" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="351.07" y1="418.81" x2="349.23" y2="416.97" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="349.68" y1="420.37" x2="347.64" y2="418.75" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="347.44" y1="423.94" x2="345.09" y2="422.8" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="346.62" y1="425.89" x2="344.18" y2="425.02" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="346.05" y1="427.91" x2="343.5" y2="427.34" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="345.69" y1="429.98" x2="343.11" y2="429.69" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="345.69" y1="434.2" x2="343.08" y2="434.48" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="346.03" y1="436.27" x2="343.47" y2="436.86" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="346.59" y1="438.31" x2="344.13" y2="439.16" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="347.39" y1="440.27" x2="345.03" y2="441.37" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="349.63" y1="443.84" x2="347.58" y2="445.45" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="351.01" y1="445.42" x2="349.17" y2="447.24" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="352.57" y1="446.84" x2="350.96" y2="448.85" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="354.27" y1="448.06" x2="352.89" y2="450.27" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="358.07" y1="449.93" x2="357.19" y2="452.37" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="360.09" y1="450.53" x2="359.49" y2="453.05" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="362.15" y1="450.9" x2="361.87" y2="453.48" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="364.28" y1="451.04" x2="364.25" y2="453.62" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="368.45" y1="450.58" x2="369.01" y2="453.14" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="370.49" y1="450.05" x2="371.34" y2="452.51" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="372.44" y1="449.25" x2="373.55" y2="451.6" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="374.31" y1="448.26" x2="375.68" y2="450.47" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="377.63" y1="445.68" x2="379.45" y2="447.52" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="379.05" y1="444.12" x2="381.06" y2="445.76" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="380.3" y1="442.42" x2="382.48" y2="443.81" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="381.34" y1="440.58" x2="383.67" y2="441.74" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="380.86" y1="438.17" x2="384.58" y2="439.5" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="380.86" y1="426.18" x2="384.58" y2="424.85" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="375.17" y1="418.38" x2="377.6" y2="415.26" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="366.24" y1="414.75" x2="366.63" y2="410.84" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="356.74" y1="416.45" x2="355.01" y2="412.88" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="349.57" y1="422.89" x2="346.2" y2="420.79" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="346.9" y1="432.16" x2="342.94" y2="432.16" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="349.57" y1="441.46" x2="346.2" y2="443.55" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="356.74" y1="447.89" x2="355.01" y2="451.46" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="366.24" y1="449.56" x2="366.63" y2="453.5" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="375.17" y1="445.96" x2="377.6" y2="449.08" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                        </g>
                        <g id="pressure_indicator_screws">
                            <g>
                            <polygon points="374.32 430.71 374.91 430.86 374.2 433.46 373.64 433.29 374.32 430.71" fill="#595959" fillRule="evenodd"/>
                            <path d="M377.61,447.38a1.4,1.4,0,0,1,1.25-2.07l-.71,2.58a1.45,1.45,0,0,1-.54-.51Zm1.82-1.92a2.42,2.42,0,0,1,.28.22,1.4,1.4,0,0,1-.26,2.19,1.35,1.35,0,0,1-.73.19Z" transform="translate(-4.51 -14.6)" fill="#2f2f2f" fillRule="evenodd"/>
                            </g>
                            <g>
                            <polygon points="354.52 430.71 355.11 430.86 354.4 433.46 353.84 433.29 354.52 430.71" fill="#595959" fillRule="evenodd"/>
                            <path d="M357.81,447.38a1.4,1.4,0,0,1,1.25-2.07l-.71,2.58a1.45,1.45,0,0,1-.54-.51Zm1.82-1.92a2.42,2.42,0,0,1,.28.22,1.4,1.4,0,0,1-.26,2.19,1.35,1.35,0,0,1-.73.19Z" transform="translate(-4.51 -14.6)" fill="#2f2f2f" fillRule="evenodd"/>
                            </g>
                        </g>
                        <polygon ref={needle => this.pressureNeedle = needle} onClick={this.handleClick} id="pressure_indicator_needle" points="360.25 431.85 361.02 429.78 377.72 435.84 383.33 439.13 376.95 437.91 360.25 431.85" fill="#fff" fillRule="evenodd"/>
                    </g>
                  </g>
            }
        }
        
        let renderDumpSpray = () => {
            if (this.props.id === 'right_dump_line' && this.props.fuelPresent) {
                return <g id="right_fuel_spray">
                            <g>
                                <line className="sprayLine" x1="719.46" y1="264.6" x2="720.92" y2="277.72" fill="none" stroke="#00ce9e" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray="3.25"/>
                                <line className="sprayLine" x1="716.37" y1="264.72" x2="716.37" y2="277.78" fill="none" stroke="#00ce9e" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray="3.25"/>
                                <line className="sprayLine" x1="713.31" y1="264.6" x2="711.84" y2="277.72" fill="none" stroke="#00ce9e" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray="3.25"/>
                            </g>
                        </g>
            }
        }

        return (
            <g>
                <polygon className={this.props.classes ? this.props.classes : ''} fill={this.props.fuelPresent ? '#00ff05' : '#e0e0e0'} id={this.props.id} points={this.props.points} onClick={this.handleClick} />
                {renderPressureTransmitter()}
                {renderDumpSpray()}
            </g>
        );
    }
}

export default Manifold;