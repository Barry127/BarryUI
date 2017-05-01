import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Icon from './Icon';

describe('Icon', () => {

  it('renders without crashing', () => {
    mount(<Icon icon="book" />);
  });

  describe('icon', () => {
    it('sets the icon name book', () => {
      const wrapper = mount(<Icon icon="book" />);
      expect(wrapper.find('.buiIcon__icon').hasClass('buiIcon__icon--book')).to.be.true;
    });

    it('sets the icon name rocket', () => {
      const wrapper = mount(<Icon icon="rocket" />);
      expect(wrapper.find('.buiIcon__icon').hasClass('buiIcon__icon--rocket')).to.be.true;
    });

    it('sets the icon name cog', () => {
      const wrapper = mount(<Icon icon="cog" />);
      expect(wrapper.find('.buiIcon__icon').hasClass('buiIcon__icon--cog')).to.be.true;
    });
  });

  describe('className', () => {
    const customClassName = 'myClass';

    it('has no custom classname by default', () => {
      const wrapper = mount(<Icon icon="book" />);
      expect(wrapper.find('.buiIcon').hasClass(customClassName)).to.be.false;
    });

    it('sets the custom classname to the root element', () => {
      const wrapper = mount(<Icon icon="book" className={customClassName} />);
      expect(wrapper.find('.buiIcon').hasClass(customClassName)).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Icon icon="book" primary className={customClassName} />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--primary')).to.be.true;
      expect(wrapper.find('.buiIcon').hasClass(customClassName)).to.be.true;
    });
  });

  describe('style', () => {
    const customStyles = {
      color: 'red',
      fontSize: '20px'
    };

    it('has no custom styles by default', () => {
      const wrapper = mount(<Icon icon="book" />);
      expect(wrapper.find('.buiIcon').get(0).style.length).to.equal(0);
    });

    it('adds custom styles', () => {
      const wrapper = mount(<Icon icon="book" style={customStyles} />);
      expect(wrapper.find('.buiIcon').get(0).style.length).to.equal(2);
      expect(wrapper.find('.buiIcon').get(0).style.color).to.equal('red');
      expect(wrapper.find('.buiIcon').get(0).style.fontSize).to.equal('20px');
    });
  });

  describe('rotate', () => {
    it('does not rotate by default', () => {
      const wrapper = mount(<Icon icon="book" />);
      expect(wrapper.find('.buiIcon__icon').get(0).style.transform).to.be.undefined;
    });

    it('rotates 45 deg', () => {
      const wrapper = mount(<Icon rotate={45} icon="book" />);
      expect(wrapper.find('.buiIcon__icon').get(0).style.transform).to.equal('rotate(45deg)');
    });

    it('rotates -90 deg', () => {
      const wrapper = mount(<Icon rotate={-90} icon="book" />);
      expect(wrapper.find('.buiIcon__icon').get(0).style.transform).to.equal('rotate(-90deg)');
    });
  });

  describe('spin', () => {
    it('does not spin by default', () => {
      const wrapper = mount(<Icon icon="book" />);
      expect(wrapper.find('.buiIcon__icon').hasClass('buiIcon__icon--spin')).to.be.false;
    });

    it('adds the spin class', () => {
      const wrapper = mount(<Icon icon="book" spin />);
      expect(wrapper.find('.buiIcon__icon').hasClass('buiIcon__icon--spin')).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Icon icon="rocket" spin />);
      expect(wrapper.find('.buiIcon__icon').hasClass('buiIcon__icon--spin')).to.be.true;
      expect(wrapper.find('.buiIcon__icon').hasClass('buiIcon__icon--rocket')).to.be.true;
    });
  });

  describe('disabled', () => {
    it('is not disabled by default', () => {
      const wrapper = mount(<Icon icon="book" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--disabled')).to.be.false;
    });

    it('adds the disabled class', () => {
      const wrapper = mount(<Icon icon="book" disabled />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--disabled')).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Icon icon="book" disabled primary className="customClass" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--disabled')).to.be.true;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--primary')).to.be.true;
      expect(wrapper.find('.buiIcon').hasClass('customClass')).to.be.true;
    });
  });

  describe('primary', () => {
    it('is not primary by default', () => {
      const wrapper = mount(<Icon icon="book" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--primary')).to.be.false;
    });

    it('adds the primary class', () => {
      const wrapper = mount(<Icon icon="book" primary />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--primary')).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Icon icon="book" disabled primary className="customClass" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--disabled')).to.be.true;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--primary')).to.be.true;
      expect(wrapper.find('.buiIcon').hasClass('customClass')).to.be.true;
    });
  });

  describe('state', () => {
    it('has no state by default', () => {
      const wrapper = mount(<Icon icon="book" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--state-success')).to.be.false;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--state-warning')).to.be.false;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--state-danger')).to.be.false;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--state-info')).to.be.false;
    });

    it('adds success state', () => {
      const wrapper = mount(<Icon icon="book" state="success" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--state-success')).to.be.true;
    });

    it('adds warning state', () => {
      const wrapper = mount(<Icon icon="book" state="warning" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--state-warning')).to.be.true;
    });

    it('adds danger state', () => {
      const wrapper = mount(<Icon icon="book" state="danger" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--state-danger')).to.be.true;
    });

    it('adds info state', () => {
      const wrapper = mount(<Icon icon="book" state="info" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--state-info')).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Icon icon="book" state="warning" disabled className="customClass" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--state-warning')).to.be.true;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--disabled')).to.be.true;
      expect(wrapper.find('.buiIcon').hasClass('customClass')).to.be.true;
    });
  });

  describe('size', () => {
    it('has no size by default', () => {
      const wrapper = mount(<Icon icon="book" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-small')).to.be.false;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-medium')).to.be.false;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-large')).to.be.false;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-2x')).to.be.false;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-3x')).to.be.false;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-4x')).to.be.false;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-5x')).to.be.false;
    });

    it('adds small size', () => {
      const wrapper = mount(<Icon icon="book" size="small" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-small')).to.be.true;
    });

    it('adds medium size', () => {
      const wrapper = mount(<Icon icon="book" size="medium" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-medium')).to.be.true;
    });

    it('adds large size', () => {
      const wrapper = mount(<Icon icon="book" size="large" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-large')).to.be.true;
    });

    it('adds 2x size', () => {
      const wrapper = mount(<Icon icon="book" size="2x" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-2x')).to.be.true;
    });

    it('adds 3x size', () => {
      const wrapper = mount(<Icon icon="book" size="3x" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-3x')).to.be.true;
    });

    it('adds 4x size', () => {
      const wrapper = mount(<Icon icon="book" size="4x" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-4x')).to.be.true;
    });

    it('adds 5x size', () => {
      const wrapper = mount(<Icon icon="book" size="5x" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-5x')).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Icon icon="book" size="large" state="warning" disabled className="customClass" />);
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--size-large')).to.be.true;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--state-warning')).to.be.true;
      expect(wrapper.find('.buiIcon').hasClass('buiIcon--disabled')).to.be.true;
      expect(wrapper.find('.buiIcon').hasClass('customClass')).to.be.true;
    });
  });

  describe('events', () => {
    it('passes onClick event on to the root element', () => {
      const onIconClick = spy();
      const wrapper = mount(<Icon icon="book" onClick={onIconClick} />);
      wrapper.find('.buiIcon').simulate('click');
      expect(onIconClick.calledOnce).to.be.true;
    });

    it('passes onContextMenu event on to the root element', () => {
      const onIconContextMenu = spy();
      const wrapper = mount(<Icon icon="book" onContextMenu={onIconContextMenu} />);
      wrapper.find('.buiIcon').simulate('contextMenu');
      expect(onIconContextMenu.calledOnce).to.be.true;
    });

    it('passes onKeyDown event on to the root element', () => {
      const onIconKeyDown = spy();
      const wrapper = mount(<Icon icon="book" onKeyDown={onIconKeyDown} />);
      wrapper.find('.buiIcon').simulate('keyDown');
      expect(onIconKeyDown.calledOnce).to.be.true;
    });
  });

});
