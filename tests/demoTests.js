module.exports = {
	afterEach: function (browser, done) {
		browser.end();
		done();
	},

	beforeEach: function (browser) {
		browser.windowMaximize();
	},

	'Demo login test to test arena': (browser) => {
		browser.url(`${browser.baseUrl}/zaloguj`);

		browser.element.find('#email').sendKeys('administrator@testarena.pl');
		browser.element.find('#password').sendKeys('sumXQQ72$L');
		browser.element.find('#login').click();

		browser.expect.url().to.contain('demo.testarena.pl/');
	},
};
