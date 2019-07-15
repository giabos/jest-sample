


var cssUrl = require('css-url-regex')


const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });



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


        const body = await page.$('body');
        expect(await body.$eval('button', node => node.innerText)).toBe('0');

        const btn = await page.$('button');
        await btn.click();
        expect(await body.$eval('button', node => node.innerText)).toBe('1');
        await btn.click();
        expect(await body.$eval('button', node => node.innerText)).toBe('2');


        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();


    });
});