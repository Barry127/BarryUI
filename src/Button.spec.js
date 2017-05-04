import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import cheerio from 'cheerio';
import Button from './Button';

describe.only('Button', () => {
  it('renders without crashing', () => {
    mount(<Button>My Button</Button>);
  });

  it('renders child elements', () => {
    const wrapper = mount(<Button>My Button</Button>);
    expect(wrapper.text()).to.equal('My Button');

    const wrapper2 = mount(<Button><strong>Strong</strong><u>U</u></Button>);
    expect(wrapper2.text()).to.equal('StrongU');
  });

  describe('type', () => {
    it('default type is button', () => {
      const wrapper = mount(<Button />);
      const $ = cheerio.load(wrapper.html());
      const type = $('.buiButton').attr('type');

      expect(type).to.equal('button');
    });

    it('sets type to submit', () => {
      const wrapper = mount(<Button type="submit" />);
      const $ = cheerio.load(wrapper.html());
      const type = $('.buiButton').attr('type');

      expect(type).to.equal('submit');
    });

    it('sets type to reset', () => {
      const wrapper = mount(<Button type="reset" />);
      const $ = cheerio.load(wrapper.html());
      const type = $('.buiButton').attr('type');

      expect(type).to.equal('reset');
    });
  });

  describe('attrs', () => {

    it('sets disabled', () => {
      const wrapper = mount(<Button disabled />);
      const $ = cheerio.load(wrapper.html());
      const attr = $('.buiButton').attr('disabled');

      expect(attr).to.equal('disabled');
    });

    it('sets form', () => {
      const wrapper = mount(<Button form="myForm" />);
      const $ = cheerio.load(wrapper.html());
      const attr = $('.buiButton').attr('form');

      expect(attr).to.equal('myForm');
    });

    it('sets formAction', () => {
      const wrapper = mount(<Button formAction="#" />);
      const $ = cheerio.load(wrapper.html());
      const attr = $('.buiButton').attr('formaction');

      expect(attr).to.equal('#');
    });

    it('sets formEncType', () => {
      const wrapper = mount(<Button formEncType="text/plain" />);
      const $ = cheerio.load(wrapper.html());
      const attr = $('.buiButton').attr('formenctype');

      expect(attr).to.equal('text/plain');
    });

    it('sets formMethod', () => {
      const wrapper = mount(<Button formMethod="post" />);
      const $ = cheerio.load(wrapper.html());
      const attr = $('.buiButton').attr('formmethod');

      expect(attr).to.equal('post');
    });

    it('sets formNoValidate', () => {
      const wrapper = mount(<Button formNoValidate />);
      const $ = cheerio.load(wrapper.html());
      const attr = $('.buiButton').attr('formnovalidate');

      expect(attr).to.equal('');
    });

    it('sets formTarget', () => {
      const wrapper = mount(<Button formTarget="_self" />);
      const $ = cheerio.load(wrapper.html());
      const attr = $('.buiButton').attr('formtarget');

      expect(attr).to.equal('_self');
    });

    it('sets name', () => {
      const wrapper = mount(<Button name="myButton" />);
      const $ = cheerio.load(wrapper.html());
      const attr = $('.buiButton').attr('name');

      expect(attr).to.equal('myButton');
    });

    it('sets tabIndex', () => {
      const wrapper = mount(<Button tabIndex={3} />);
      const $ = cheerio.load(wrapper.html());
      const attr = $('.buiButton').attr('tabindex');

      expect(attr).to.equal('3');
    });

    it('sets value', () => {
      const wrapper = mount(<Button value="myButton" />);
      const $ = cheerio.load(wrapper.html());
      const attr = $('.buiButton').attr('value');

      expect(attr).to.equal('myButton');
    });
  });

  describe('id', () => {
    it('sets a random unique id by default', () => {
      const wrapper = mount(<Button />);
      const $ = cheerio.load(wrapper.html());
      const id = $('.buiButton').attr('id');

      expect(id).to.not.be.undefined;
    });

    it('sets the id', () => {
      const wrapper = mount(<Button id="myButtonId" />);
      const $ = cheerio.load(wrapper.html());
      const id = $('.buiButton').attr('id');

      expect(id).to.equal('myButtonId');
    });
  });

  describe('className', () => {
    const customClassName = 'myClass';

    it('has no custom classname by default', () => {
      const wrapper = mount(<Button />);
      expect(wrapper.find('.buiButton').hasClass(customClassName)).to.be.false;
    });

    it('sets the custom classname to the root element', () => {
      const wrapper = mount(<Button className={customClassName} />);
      expect(wrapper.find('.buiButton').hasClass(customClassName)).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Button primary className={customClassName} />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--primary')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass(customClassName)).to.be.true;
    });
  });

  describe('style', () => {
    const customStyles = {
      color: 'red',
      fontSize: '20px'
    };

    it('has no custom styles by default', () => {
      const wrapper = mount(<Button />);
      expect(wrapper.find('.buiButton').get(0).style.length).to.equal(0);
    });

    it('adds custom styles', () => {
      const wrapper = mount(<Button style={customStyles} />);
      expect(wrapper.find('.buiButton').get(0).style.length).to.equal(2);
      expect(wrapper.find('.buiButton').get(0).style.color).to.equal('red');
      expect(wrapper.find('.buiButton').get(0).style.fontSize).to.equal('20px');
    });
  });

  describe('primary', () => {
    it('is not primary by default', () => {
      const wrapper = mount(<Button />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--primary')).to.be.false;
    });

    it('adds the primary class', () => {
      const wrapper = mount(<Button primary />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--primary')).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Button primary className="customClass" />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--primary')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('customClass')).to.be.true;
    });
  });

  describe('secondary', () => {
    it('is not secondary by default', () => {
      const wrapper = mount(<Button />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--secondary')).to.be.false;
    });

    it('adds the secondary class', () => {
      const wrapper = mount(<Button secondary />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--secondary')).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Button secondary className="customClass" />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--secondary')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('customClass')).to.be.true;
    });
  });

  describe('state', () => {
    it('has no state by default', () => {
      const wrapper = mount(<Button />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--state-success')).to.be.false;
      expect(wrapper.find('.buiButton').hasClass('buiButton--state-warning')).to.be.false;
      expect(wrapper.find('.buiButton').hasClass('buiButton--state-danger')).to.be.false;
      expect(wrapper.find('.buiButton').hasClass('buiButton--state-info')).to.be.false;
    });

    it('adds success state', () => {
      const wrapper = mount(<Button state="success" />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--state-success')).to.be.true;
    });

    it('adds warning state', () => {
      const wrapper = mount(<Button state="warning" />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--state-warning')).to.be.true;
    });

    it('adds danger state', () => {
      const wrapper = mount(<Button state="danger" />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--state-danger')).to.be.true;
    });

    it('adds info state', () => {
      const wrapper = mount(<Button state="info" />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--state-info')).to.be.true;
    });

    it('adds link state', () => {
      const wrapper = mount(<Button state="link" />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--state-link')).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Button state="warning" className="customClass" />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--state-warning')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('customClass')).to.be.true;
    });
  });

  describe('basic', () => {

    it('is not basic by default', () => {
      const wrapper = mount(<Button />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--basic')).to.be.false;
    });

    it('sets the basic variation.', () => {
      const wrapper = mount(<Button basic />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--basic')).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Button basic primary className={'myClass'} />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--primary')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('myClass')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('buiButton--basic')).to.be.true;
    });
  });

  describe('size', () => {
    it('has no size by default', () => {
      const wrapper = mount(<Button />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--size-small')).to.be.false;
      expect(wrapper.find('.buiButton').hasClass('buiButton--size-medium')).to.be.false;
      expect(wrapper.find('.buiButton').hasClass('buiButton--size-large')).to.be.false;
    });

    it('adds small size', () => {
      const wrapper = mount(<Button size="small" />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--size-small')).to.be.true;
    });

    it('adds medium size', () => {
      const wrapper = mount(<Button size="medium" />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--size-medium')).to.be.true;
    });

    it('adds large size', () => {
      const wrapper = mount(<Button size="large" />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--size-large')).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Button size="large" state="warning" basic className="customClass" />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--size-large')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('buiButton--state-warning')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('buiButton--basic')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('customClass')).to.be.true;
    });
  });

  describe('fluid', () => {

    it('is not fluid by default', () => {
      const wrapper = mount(<Button />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--fluid')).to.be.false;
    });

    it('sets the fluid variation.', () => {
      const wrapper = mount(<Button fluid />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--fluid')).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Button fluid primary className={'myClass'} />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--primary')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('myClass')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('buiButton--fluid')).to.be.true;
    });
  });

  describe('active', () => {

    it('is not active by default', () => {
      const wrapper = mount(<Button />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--active')).to.be.false;
    });

    it('sets the active variation.', () => {
      const wrapper = mount(<Button active />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--active')).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Button active primary className={'myClass'} />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--primary')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('myClass')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('buiButton--active')).to.be.true;
    });
  });

  describe('circular', () => {

    it('is not circular by default', () => {
      const wrapper = mount(<Button />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--circular')).to.be.false;
    });

    it('sets the circular variation.', () => {
      const wrapper = mount(<Button circular />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--circular')).to.be.true;
    });

    it('does not affect other classes', () => {
      const wrapper = mount(<Button circular primary className={'myClass'} />);
      expect(wrapper.find('.buiButton').hasClass('buiButton--primary')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('myClass')).to.be.true;
      expect(wrapper.find('.buiButton').hasClass('buiButton--circular')).to.be.true;
    });
  });

  describe('events', () => {
    it('passes onClick event on to the root element', () => {
      const onButtonClick = spy();
      const wrapper = mount(<Button onClick={onButtonClick} />);
      wrapper.find('.buiButton').simulate('click');
      expect(onButtonClick.calledOnce).to.be.true;
    });

    it('passes onContextMenu event on to the root element', () => {
      const onButtonContextMenu = spy();
      const wrapper = mount(<Button onContextMenu={onButtonContextMenu} />);
      wrapper.find('.buiButton').simulate('contextMenu');
      expect(onButtonContextMenu.calledOnce).to.be.true;
    });

    it('passes onKeyDown event on to the root element', () => {
      const onButtonKeyDown = spy();
      const wrapper = mount(<Button onKeyDown={onButtonKeyDown} />);
      wrapper.find('.buiButton').simulate('keyDown');
      expect(onButtonKeyDown.calledOnce).to.be.true;
    });

    it('does not fire onClick event if the button is disabled', () => {
      const onButtonClick = spy();
      const wrapper = mount(<Button disabled onClick={onButtonClick} />);
      wrapper.find('.buiButton').simulate('click');
      expect(onButtonClick.called).to.be.false;
    });
  });
});
