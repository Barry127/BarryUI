import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cuid from 'cuid';
import { filterEvents } from 'react-helper-pack';
import pick from 'lodash/pick';

const buttonAttrs = [
  'autoFocus',
  'disabled',
  'form',
  'formAction',
  'formEncType',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'name',
  'tabIndex',
  'value'
];

class Button extends PureComponent {

  constructor (props) {
    super(props);
    this.id = cuid();
  }

  render () {
    const { active, basic, children, circular, className, fluid, id, primary, secondary, size, state, style, type } = this.props;
    const attrs = pick(this.props, buttonAttrs);
    const events = filterEvents(this.props);
    const classes = classNames('buiButton', className, {
      'buiButton--active': active,
      'buiButton--basic': basic,
      'buiButton--circular': circular,
      'buiButton--fluid': fluid,
      'buiButton--primary': primary,
      'buiButton--secondary': secondary,
      [`buiButton--size-${size}`]: size,
      [`buiButton--state-${state}`]: state
    });

    return (
      <button id={id || this.id} className={classes} style={style} type={type} {...attrs} {...events}>{ children }</button>
    );
  }
}

Button.defaultProps = {
  active: false,
  basic: false,
  children: null,
  circular: false,
  className: null,
  fluid: false,
  id: null,
  primary: false,
  secondary: false,
  size: null,
  state: null,
  style: null,
  type: 'button'
};

Button.propTypes = {
  active: PropTypes.bool,
  basic: PropTypes.bool,
  children: PropTypes.node,
  circular: PropTypes.bool,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  id: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  size: PropTypes.string,
  state: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string
};

export default Button;
