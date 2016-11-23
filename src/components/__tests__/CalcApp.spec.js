import React from 'react';
import { mount } from 'enzyme';

import CalcApp from '../CalcApp';
import CalcButton from '../CalcButton';

it('render button correctly', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');
  const row0 = rows.at(0);
  expect(row0.find(CalcButton).at(0).text()).toBe('AC');
  expect(row0.find(CalcButton).at(1).text()).toBe('+/-');
  expect(row0.find(CalcButton).at(2).text()).toBe('%');
  expect(row0.find(CalcButton).at(3).text()).toBe('÷');

  const row1 = rows.at(1);
  expect(row1.find(CalcButton).at(0).text()).toBe('7');
  expect(row1.find(CalcButton).at(1).text()).toBe('8');
  expect(row1.find(CalcButton).at(2).text()).toBe('9');
  expect(row1.find(CalcButton).at(3).text()).toBe('x');

  const row2 = rows.at(2);
  expect(row2.find(CalcButton).at(0).text()).toBe('4');
  expect(row2.find(CalcButton).at(1).text()).toBe('5');
  expect(row2.find(CalcButton).at(2).text()).toBe('6');
  expect(row2.find(CalcButton).at(3).text()).toBe('-');

  const row3 = rows.at(3);
  expect(row3.find(CalcButton).at(0).text()).toBe('1');
  expect(row3.find(CalcButton).at(1).text()).toBe('2');
  expect(row3.find(CalcButton).at(2).text()).toBe('3');
  expect(row3.find(CalcButton).at(3).text()).toBe('+');

  const row4 = rows.at(4);
  expect(row4.find(CalcButton).at(0).text()).toBe('0');
  expect(row4.find(CalcButton).at(1).text()).toBe('.');
  expect(row4.find(CalcButton).at(2).text()).toBe('=');
});


it('7 8 9 -> 789', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const btn9 = row1.find(CalcButton).at(2);

  btn7.simulate('click');
  btn8.simulate('click');
  btn9.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('789');
});

it('1 2 3 -> 123', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row3 = rows.at(3);
  const btn1 = row3.find(CalcButton).at(0);
  const btn2 = row3.find(CalcButton).at(1);
  const btn3 = row3.find(CalcButton).at(2);

  btn1.simulate('click');
  btn2.simulate('click');
  btn3.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('123');
});

it('4 5 6 -> 456', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row2 = rows.at(2);
  const btn4 = row2.find(CalcButton).at(0);
  const btn5 = row2.find(CalcButton).at(1);
  const btn6 = row2.find(CalcButton).at(2);

  btn4.simulate('click');
  btn5.simulate('click');
  btn6.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('456');
});

it('7 8 9 - 8 = -> 781', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const btn9 = row1.find(CalcButton).at(2);

  btn7.simulate('click');
  btn8.simulate('click');
  btn9.simulate('click');

  const row2 = rows.at(2);
  const btnMinus = row2.find(CalcButton).at(3);

  btnMinus.simulate('click');

  btn8.simulate('click');

  const row4 = rows.at(4);
  const btnEqual = row4.find(CalcButton).at(2);

  btnEqual.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('781');
});

it('7 8 9 + 8 = -> 797', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const btn9 = row1.find(CalcButton).at(2);

  btn7.simulate('click');
  btn8.simulate('click');
  btn9.simulate('click');

  const row3 = rows.at(3);
  const btnPlus = row3.find(CalcButton).at(3);

  btnPlus.simulate('click');

  btn8.simulate('click');

  const row4 = rows.at(4);
  const btnEqual = row4.find(CalcButton).at(2);

  btnEqual.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('797');
});

it('7 8 9 * 8 = -> 6312', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const btn9 = row1.find(CalcButton).at(2);

  btn7.simulate('click');
  btn8.simulate('click');
  btn9.simulate('click');

  const btnTimes = row1.find(CalcButton).at(3);

  btnTimes.simulate('click');

  btn8.simulate('click');

  const row4 = rows.at(4);
  const btnEqual = row4.find(CalcButton).at(2);

  btnEqual.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('6312');
});

it('7 8 9 / 8 = -> 98.625', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const btn9 = row1.find(CalcButton).at(2);

  btn7.simulate('click');
  btn8.simulate('click');
  btn9.simulate('click');

  const row0 = rows.at(0);
  const btnDivide = row0.find(CalcButton).at(3);

  btnDivide.simulate('click');

  btn8.simulate('click');

  const row4 = rows.at(4);
  const btnEqual = row4.find(CalcButton).at(2);

  btnEqual.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('98.625');
});

it('7 8 9 - + 8 = -> 797', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const btn9 = row1.find(CalcButton).at(2);

  btn7.simulate('click');
  btn8.simulate('click');
  btn9.simulate('click');

  const row2 = rows.at(2);
  const btnMinus = row2.find(CalcButton).at(3);
  const row3 = rows.at(3);
  const btnPlus = row3.find(CalcButton).at(3);

  btnMinus.simulate('click');
  btnPlus.simulate('click');

  btn8.simulate('click');

  const row4 = rows.at(4);
  const btnEqual = row4.find(CalcButton).at(2);

  btnEqual.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('797');
});

it('show not implemented', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');
  const row0 = rows.at(0);
  const btnPercent = row0.find(CalcButton).at(2);

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);

  btn7.simulate('click');
  const initialState = Object.assign({}, app.state());
  btnPercent.simulate('click');

  expect(app.state()).toEqual(initialState);

});
it('AC should clear state', () => {
  const app = mount(<CalcApp />);

  const initialState = Object.assign({}, app.state());

  const rows = app.find('.calc-row');
  const row0 = rows.at(0);
  const AC = row0.find(CalcButton).at(0);

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);

  btn7.simulate('click');
  AC.simulate('click');

  expect(app.state()).toEqual(initialState);
});
