const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'OLSKProgressRingStubRoute',
			OLSKRouteFunction (req, res, next) {
				return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'));
			},
		}];
	},

};

Object.assign(exports, mod)
