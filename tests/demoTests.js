const LoginPage = require('../pages/loginPage/loginPage.js').LoginPage

module.exports = {
	afterEach: function (browser, done) {
		browser.end();
		done();
	},

	beforeEach: function (browser) {
		browser.windowMaximize();
	},

	'Demo login test to test arena': (browser) => {

		// let loginPage = new LoginPage(browser)

		browser.url('http://demo.testarena.pl/zaloguj');
		
		// loginPage.login('k.02.pl', '123Admin')

		new LoginPage(browser).login().checkLoginElements()
		
		


	},

	'Demo logout test': (browser) => {

		// let loginPage = new LoginPage(browser)

		browser.url('http://demo.testarena.pl/zaloguj');
		
		// loginPage.login('k.02.pl', '123Admin')

		new LoginPage(browser).login().checkLoginElements()

		new LoginPage(browser).logout()

		new LoginPage(browser).checkVisible()
	},
};