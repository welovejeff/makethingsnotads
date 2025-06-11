/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');

describe('smooth scroll handler', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <header></header>
      <a href="#target" id="link">link</a>
      <div id="target"></div>
    `;

    const target = document.getElementById('target');
    Object.defineProperty(target, 'offsetTop', { value: 500, writable: true });

    window.scrollTo = jest.fn();

    const scriptPath = path.join(__dirname, '..', 'js', 'main.js');
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');
    eval(scriptContent);

    document.dispatchEvent(new Event('DOMContentLoaded'));
  });

  test('clicking anchor scrolls to element offset minus header', () => {
    const link = document.getElementById('link');

    link.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 400,
      behavior: 'smooth'
    });
  });
});
