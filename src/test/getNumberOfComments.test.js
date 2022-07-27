/**
 * @jest-environment jsdom
 */

import getNumberOfComments from '../modules/getNumberOfComments.js';

describe('getNumberOfComments tests', () => {
  test('Should count all li elements to be 3', () => {
    document.body.innerHTML = '<ul class="comments"><li></li><li></li><li></li></ul>';
    const number = getNumberOfComments();
    expect(number).toBe(3);
  });

  test('Should count all li elements to be 0', () => {
    document.body.innerHTML = '<ul class="comments"></ul>';
    const number = getNumberOfComments();
    expect(number).toBe(0);
  });

  test('Should count all li elements to be 9', () => {
    document.body.innerHTML = '<ul class="comments"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>';
    const number = getNumberOfComments();
    expect(number).toBe(9);
  });
});
