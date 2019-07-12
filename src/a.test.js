


var cssUrl = require('css-url-regex')



test('should work', () => {
    expect(1).toBe(1);

    expect(cssUrl().test('url(bar.css)')).toBe(true); // => true
    expect(cssUrl().test('kljhsdf')).toBe(false); // => false


});


describe('suite 1', () => {


    it('should work', () => {
        expect(1).toBe(1);
    });



});


describe('Google', () => {
    beforeAll(async () => {
        await page.goto('https://www.google.com');
    });

    it('should be titled "Google"', async () => {
        await expect(page.title()).resolves.toMatch('Google');
    });
});



describe('Localhost', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:1234');
    });

    it('should be titled "Hello"', async () => {
        await expect(page.title()).resolves.toMatch('Hello');
    });
});