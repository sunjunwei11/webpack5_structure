import './styles/iconfont.scss';
import './styles/index.scss';
import './fun/img';

const num1  = 1;
const num2  = 2;
console.log(num1 + num2);

const arr = [1, 2, 3];
console.log('includes:', arr.includes(1));

document.getElementById('btn').onclick = () => {
	// 魔法注释，定义chunk的名字
	import(/* webpackChunkName: "utils" */'./utils')
		.then(({ add, testPromise }) => {
			console.log(add(2, 3));
			testPromise.then(num => {
				console.log(num);
			});
		});
};
