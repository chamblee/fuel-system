import React from 'react'

class SpringValve extends React.Component {
    constructor(props) {
        super(props);
        this.el = null;
        this.back = null;
        this.tl= new TimelineMax({ paused: true }); // eslint-disable-line
    }

    componentDidMount() {
        let transform_origin = '50% top';
        let scaleBy = {scaleY: 0.65};
        
        if (this.props.springClasses.indexOf('leftCenter') > -1) {
            transform_origin = 'right 50%';
            scaleBy = {scaleX: 0.65};
        } else if (this.props.springClasses.indexOf('rightCenter') > -1) {
            transform_origin = 'left 50%';
            scaleBy = {scaleX: 0.65};
        } else if (this.props.springClasses.indexOf('bottomCenter') > -1) {
            transform_origin = '50% bottom';
        }

        TweenMax.set(this.el, {transformOrigin: transform_origin}); // eslint-disable-line
        this.tl.to(this.el, 0.25, scaleBy)
        .to(this.back, 0.25, {fill:'#00ff05'});
    }
    
    render() {
        if (this.props.fuelPresent) {
            this.tl.play();
        } else if (!this.props.fuelPresent) {
            this.tl.reverse();
        }
        
        return (
            <g id={this.props.id}>
                <rect ref={back => this.back = back} x={this.props.rectX} y={this.props.rectY} width={this.props.springClasses.indexOf('horizontal') > -1 ? "16.1" : "7.03"} height={this.props.springClasses.indexOf('horizontal') > -1 ? "7.03" : "16.1"} rx="1.79" stroke="#666" fill="#fff"/>
                <g ref={spring => this.el = spring} className={this.props.springClasses}>
                    <circle cx={this.props.circX} cy={this.props.circY} r="2.76" fill="#666"/>
                    <path d={this.props.pathD} transform="translate(-4.51 -14.6)" fill="none" stroke="#666" strokeMiterlimit="10" strokeWidth="0.75"/>
                </g>
            </g>
        );
    }
}

export default SpringValve;