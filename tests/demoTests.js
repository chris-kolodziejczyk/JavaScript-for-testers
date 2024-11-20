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
		
		// new LoginPage(browser).getUrl('http://demo.testarena.pl/zaloguj', 'Poprawne przejście na stronę TestArena').

		// // loginPage.login()

		// new LoginPage(browser).login()

		// new LoginPage(browser).checkUrlContain()

		new LoginPage(browser)
		.getUrl('http://demo.testarena.pl/zaloguj', 'Poprawne przejście na stronę TestArena')
		.login()
		.checkUrlContain()
	},

	'Demo not proper login test to test arena': (browser) => {
		browser.url('http://demo.testarena.pl/zaloguj');

		element('#email').sendKeys('administratortestarena.pl');
		element('#password').sendKeys('oerjg86687*^&*^&');
		element('#login').click();

		browser.expect.url().to.contain('/logowanie');
		browser.expect
			.element('div.formContainer:nth-child(2) > span:nth-child(1) > div')
			.text.to.equal(
				'Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.'
			);
		browser.expect
			.element(
				'div.formContainer:nth-child(3) > span:nth-child(1) > div:nth-child(3)'
			)
			.text.to.equal('Adres e-mail i/lub hasło są niepoprawne.');
	},
	// 'Logout test': (browser) => {
	// 	browser.url('http://demo.testarena.pl/zaloguj');
	// 	element('#email').sendKeys('administrator@testarena.pl');
	// 	element('#password').sendKeys('sumXQQ72$L');
	// 	element('#login').click();
		
	// 	element('.icons-switch').click();

	// 	browser.expect.element(
	// 		'#head-top > div.top_right > div.header_logout > a > span'
	// 	).to.be.visible;
	// 	element('#head-top > div.top_right > div.header_logout > a > span').click();
	// 	browser.expect.element('#email').to.be.visible;
	// },
};
