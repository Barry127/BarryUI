import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { filterEvents } from 'react-helper-pack';

class Icon extends PureComponent {
  render () {
    const { className, disabled, icon, primary, rotate, size, spin, state, style } = this.props;

    const events = filterEvents(this.props);
    const classes = classNames('buiIcon', className, {
      'buiIcon--disabled': disabled,
      'buiIcon--primary': primary,
      [`buiIcon--size-${size}`]: size,
      [`buiIcon--state-${state}`]: state
    });
    const iconClasses = classNames('buiIcon__icon', `buiIcon__icon--${icon}`, {
      'buiIcon__icon--spin': spin
    });

    const iconStyle = (rotate === 0) ? null : {
      transform: `rotate(${rotate}deg)`
    };

    return (
      <span className={classes} {...events} style={style}>
        <span className={iconClasses} style={iconStyle}/>
      </span>
    );
  }
}

Icon.defaultProps = {
  className: null,
  disabled: false,
  primary: false,
  rotate: 0,
  size: null,
  spin: false,
  state: null,
  style: null
};

Icon.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  rotate: PropTypes.number,
  size: PropTypes.string,
  spin: PropTypes.bool,
  state: PropTypes.string,
  style: PropTypes.object
};

export default Icon;
