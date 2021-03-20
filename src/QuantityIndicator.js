import React from 'react'

class QuantityIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.indicatorNeedle = null;
        this.indicatorTestButton = null;
        this.rotDuration = 2;
        this.tl_indicatorNeedleMove= new TimelineMax({ paused: false, onComplete: () => { // eslint-disable-line
            this.end_tl();
            } 
        });
        this.tl_indicatorTest= new TimelineMax({ paused: true, onComplete: () => { // eslint-disable-line
            console.log('test done');
            } 
        });
        this.indicatorTestRun = () => {
            console.log('test run');
            this.tl_indicatorTest.play();
        }
        this.indicatorTestStop = () => {
            this.tl_indicatorTest.pause(0);
        }
    }


    initializeTimeline() {
        this.tl_indicatorNeedleMove.to(this.indicatorNeedle, {rotate: this.props.rotationDeg, duration: this.rotDuration.toFixed(2), ease: "none"});
    }

    end_tl() {
        this.tl_indicatorNeedleMove.kill();
    }

    componentDidMount() {
        //suppress gsap null target warnings caused by DOM node references being re-rendered
        gsap.config({ // eslint-disable-line
            nullTargetWarn: false
        });
        
        //set initial transform values for indicatorNeedle and indicatorTestButton
        TweenMax.set(this.indicatorNeedle, {transformOrigin: '77% 17.6%', rotate: this.props.rotationDeg}); // eslint-disable-line
        TweenMax.set(this.indicatorTestButton, {transformOrigin: '50% 50%'}); // eslint-disable-line

        //inidicatorTest timeline
        this.tl_indicatorTest.to(this.indicatorNeedle, {rotate: 0, duration: 3})
        .to("#total_quan_needle", {rotate: '-=15', duration: 3}, '-=3')
        .to(this.indicatorTestButton, {scale: 0.95, duration: 0.5}, '-=3');
    }

    componentDidUpdate(prevProps) {
        let currentNeedleRotation = gsap.getProperty(this.el, "rotation"); // eslint-disable-line
        let quantityChange = Math.abs(this.props.quantity - prevProps.quantity);
        this.rotDuration = quantityChange / 100;
        this.initializeTimeline();

        if (this.props.rotationDeg !== currentNeedleRotation) {
            this.tl_indicatorNeedleMove.play();
        }

        if (this.props.dumping === 'stop' || this.props.dumping === 'has stopped') {
            this.tl_indicatorNeedleMove.pause();
            console.log('stop rot: ', gsap.getProperty(this.indicatorNeedle, "rotation")); // eslint-disable-line
        }

        if (this.props.dumping === 'stop') {
            this.props.updateQuantity(this.props.id, gsap.getProperty(this.indicatorNeedle, "rotation")); // eslint-disable-line
        }
    }

    render() {
        let renderIndicatorTestButton = () => {
            if (this.props.id === 'tank_1_indicator_needle') {
                return <g id="indicator_test_btn_1" className="test_button" ref={button => this.indicatorTestButton = button} onMouseDown={this.indicatorTestRun} onMouseUp={this.indicatorTestStop}>
                        <path d="M87.6,402.88a9.67,9.67,0,1,0,13.52-2,9.68,9.68,0,0,0-13.52,2Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-29)"/>
                        <path d="M95.36,413.79a5.16,5.16,0,1,0-5.13-5.16,5.15,5.15,0,0,0,5.13,5.16Z" transform="translate(-4.51 -14.6)" fill="#333" stroke="#666" strokeMiterlimit="10" strokeWidth="0.77" fillRule="evenodd"/>
                        </g>
            } else if (this.props.id === 'tank_2_indicator_needle') {
                return <g id="indicator_test_btn_2" className="test_button" ref={button => this.indicatorTestButton = button} onMouseDown={this.indicatorTestRun} onMouseUp={this.indicatorTestStop}>
                        <path d="M162.46,402.88a9.68,9.68,0,1,0,13.52-2,9.69,9.69,0,0,0-13.52,2Z" transform="translate(-4.51 -14.6)" fill="url(#radial-gradient-28)"/>
                        <path id="button-8"  d="M170.26,413.79a5.16,5.16,0,1,0-5.16-5.16,5.15,5.15,0,0,0,5.16,5.16Z" transform="translate(-4.51 -14.6)" fill="#333" stroke="#666" strokeMiterlimit="10" strokeWidth="0.77" fillRule="evenodd"/>
                        </g>
            } else if (this.props.id === 'tank_3_indicator_needle') {
                return <g id="indicator_test_btn_3" className="test_button" ref={button => this.indicatorTestButton = button} onMouseDown={this.indicatorTestRun} onMouseUp={this.indicatorTestStop}>
                        <path d="M560.25,402.55a9.68,9.68,0,1,0,13.55-2,9.68,9.68,0,0,0-13.55,2Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-23)"/>
                        <path id="button-3"  d="M568,413.44a5.15,5.15,0,1,0-5.13-5.16,5.16,5.16,0,0,0,5.13,5.16Z" transform="translate(-4.51 -14.6)" fill="#333" stroke="#666" strokeMiterlimit="10" strokeWidth="0.77" fillRule="evenodd"/>
                        </g>
            } else if (this.props.id === 'tank_4_indicator_needle') {
                return <g id="indicator_test_btn_4" className="test_button" ref={button => this.indicatorTestButton = button} onMouseDown={this.indicatorTestRun} onMouseUp={this.indicatorTestStop}>
                        <path d="M634.53,402.75a9.68,9.68,0,1,0,13.55-2,9.68,9.68,0,0,0-13.55,2Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-22)"/>
                        <path id="button-2"  d="M642.33,413.64a5.15,5.15,0,1,0-5.13-5.16,5.17,5.17,0,0,0,5.13,5.16Z" transform="translate(-4.51 -14.6)" fill="#333" stroke="#666" strokeMiterlimit="10" strokeWidth="0.77" fillRule="evenodd"/>
                        </g>
            } else if (this.props.id === 'left_AUX_indicator_needle') {
                return <g id="indicator_test_btn_aux_left" className="test_button" ref={button => this.indicatorTestButton = button} onMouseDown={this.indicatorTestRun} onMouseUp={this.indicatorTestStop}>
                        <path d="M236.08,390.63a9.68,9.68,0,1,0,13.55-2,9.69,9.69,0,0,0-13.55,2Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-27)"/>
                        <path id="button-7"  d="M243.87,401.52a5.15,5.15,0,1,0-5.13-5.16,5.16,5.16,0,0,0,5.13,5.16Z" transform="translate(-4.51 -14.6)" fill="#333" stroke="#666" strokeMiterlimit="10" strokeWidth="0.77" fillRule="evenodd"/>
                        </g>
            } else if (this.props.id === 'left_EXT_indicator_needle') {
                return <g id="indicator_test_btn_ext_left" className="test_button" ref={button => this.indicatorTestButton = button} onMouseDown={this.indicatorTestRun} onMouseUp={this.indicatorTestStop}>
                        <path d="M317.74,390.63a9.68,9.68,0,1,0,13.55-2,9.67,9.67,0,0,0-13.55,2Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-26)"/>
                        <path id="button-6"  d="M325.54,401.52a5.15,5.15,0,1,0-5.16-5.16,5.17,5.17,0,0,0,5.16,5.16Z" transform="translate(-4.51 -14.6)" fill="#333" stroke="#666" strokeMiterlimit="10" strokeWidth="0.77" fillRule="evenodd"/>
                        </g>
            } else if (this.props.id === 'right_AUX_indicator_needle') {
                return <g id="indicator_test_btn_aux_right" className="test_button" ref={button => this.indicatorTestButton = button} onMouseDown={this.indicatorTestRun} onMouseUp={this.indicatorTestStop}>
                        <path d="M486.15,390.63a9.68,9.68,0,1,0,13.55-2,9.69,9.69,0,0,0-13.55,2Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-24)"/>
                        <path id="button-4"  d="M493.94,401.52a5.15,5.15,0,1,0-5.13-5.16,5.16,5.16,0,0,0,5.13,5.16Z" transform="translate(-4.51 -14.6)" fill="#333" stroke="#666" strokeMiterlimit="10" strokeWidth="0.77" fillRule="evenodd"/>
                        </g>
            } else if (this.props.id === 'right_EXT_indicator_needle') {
                return <g id="indicator_test_btn_ext_right" className="test_button" ref={button => this.indicatorTestButton = button} onMouseDown={this.indicatorTestRun} onMouseUp={this.indicatorTestStop}>
                        <path d="M404.51,390.63a9.67,9.67,0,1,0,13.52-2,9.67,9.67,0,0,0-13.52,2Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-25)"/>
                        <path id="button-5"  d="M412.31,402.09a5.73,5.73,0,1,0-5.73-5.73,5.71,5.71,0,0,0,5.73,5.73Z" transform="translate(-4.51 -14.6)" fill="#333" stroke="#666" strokeMiterlimit="10" strokeWidth="0.77" fillRule="evenodd"/>
                        </g>
            }
        }

        return (
            <g>
            <polygon ref={needle => this.indicatorNeedle = needle} id={this.props.id} points={this.props.points} onClick={this.handleClick} fill="#fff" fillRule="evenodd"/>
            {renderIndicatorTestButton()}
            </g>
        );
    }
}

export default QuantityIndicator