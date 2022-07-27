/**
 * @jest-environment jsdom
 */
import showNumbers from '../showNumber.js';

describe('Tests for the items counter function', () => {
  test('Items Counter 9', () => {
    document.body.innerHTML = `
      <article></article>
      <article></article>
      <article></article>
      <article></article>
      <article></article>
      <article></article>
      <article></article>
      <article></article>
      <article></article>
      `;
    const showsNum = showNumbers();
    expect(showsNum).toBe(9);
  });
  test('Items Counter 2', () => {
    document.body.innerHTML = `
      <article></article>
      <article></article>
      `;
    const showsNum = showNumbers();
    expect(showsNum).toBe(2);
  });
  test('Items Counter 6', () => {
    document.body.innerHTML = `
      <article></article>
      <article></article>
      <article></article>
      <article></article>
      <article></article>
      <article></article>
      `;
    const showsNum = showNumbers();
    expect(showsNum).toBe(6);
  });
});