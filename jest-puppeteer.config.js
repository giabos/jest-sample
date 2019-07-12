module.exports = {
    // https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server
    server: {
        command: 'npm start',
        port: 1234,
        launchTimeout: 60000,
    },
    // https://github.com/smooth-code/jest-puppeteer/issues/89
    launch: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true,
        dumpio: true,
    },    
}

