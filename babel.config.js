module.exports = {
	presets: [
		['@babel/preset-env', 
			{
				// false
				// usage 按需引入项目中使用的Api
				// entry 根据browserlistrc引入所有需要的Api
				useBuiltIns: false,
				corejs: 3 // 默认是2
			}
		]
	],
	// plugins: [
	// 	['@babel/plugin-transform-runtime', {
	// 		'corejs': 3
	// 	}]
	// ]
};
