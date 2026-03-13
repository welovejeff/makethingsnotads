const fs = require('fs');
const path = require('path');

describe('legal pages', () => {
  const root = path.join(__dirname, '..');

  test('homepage footer links to the legal pages', () => {
    const homepage = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

    expect(homepage).toContain('href="privacy/"');
    expect(homepage).toContain('href="terms/"');
  });

  test('privacy page exists with the expected title and home link', () => {
    const privacyPage = fs.readFileSync(path.join(root, 'privacy', 'index.html'), 'utf8');

    expect(privacyPage).toContain('<title>Privacy Policy | Make Things Not Ads</title>');
    expect(privacyPage).toContain('<h1>Privacy Policy</h1>');
    expect(privacyPage).toContain('href="../"');
  });

  test('terms page exists with the expected title and home link', () => {
    const termsPage = fs.readFileSync(path.join(root, 'terms', 'index.html'), 'utf8');

    expect(termsPage).toContain('<title>Terms of Use | Make Things Not Ads</title>');
    expect(termsPage).toContain('<h1>Terms of Use</h1>');
    expect(termsPage).toContain('href="../"');
  });
});
