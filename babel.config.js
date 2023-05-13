module.exports = function(api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
					alias: {
						"@Constants": "./src/common/constants",
						"@Components": "./src/components",
						"@Request": "./src/common/requests/axios",
					},
				},
			],
		],
	};
};
