const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKProgressRing_Misc', function () {

	const item = {
		OLSKProgressRingSize: uRandomInt(),
		OLSKProgressRingBaseSize: uRandomInt(),
	};

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, item);
	});

	describe('OLSKProgressRing', function test_OLSKProgressRing () {

		it('sets width', function () {
			return browser.assert.attribute(OLSKProgressRing, 'width', item.OLSKProgressRingSize);
		});

		it('sets height', function () {
			return browser.assert.attribute(OLSKProgressRing, 'height', item.OLSKProgressRingSize);
		});

	});

	describe('OLSKProgressRingCircle', function test_OLSKProgressRingCircle () {

		it('sets fill', function () {
			return browser.assert.attribute(OLSKProgressRingCircle, 'fill', 'transparent');
		});

		it('sets r', function () {
			return browser.assert.attribute(OLSKProgressRingCircle, 'r', item.OLSKProgressRingBaseSize);
		});

		it('sets cx', function () {
			return browser.assert.attribute(OLSKProgressRingCircle, 'cx', item.OLSKProgressRingSize / 2);
		});

		it('sets cy', function () {
			return browser.assert.attribute(OLSKProgressRingCircle, 'cy', item.OLSKProgressRingSize / 2);
		});

	});

});
