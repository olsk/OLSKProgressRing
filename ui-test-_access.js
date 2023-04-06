const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKProgressRing: '.OLSKProgressRing',

	OLSKProgressRingCircle: '.OLSKProgressRingCircle',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKProgressRing_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKProgressRing', function () {
		return browser.assert.elements(OLSKProgressRing, 1);
	});

	it('shows OLSKProgressRingCircle', function () {
		return browser.assert.elements(OLSKProgressRingCircle, 1);
	});

});
