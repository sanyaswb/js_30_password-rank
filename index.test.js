const passwordRank = require('./index');
const solution = require('./system/solution');
const { getRandomInt } = require('./system/environment');

test('Функция должна вернуть строку', () => {
	const type = typeof passwordRank('John2022');

	expect(type).toBe('string');
});

test('Тест. password: "John2022"', () => {
	const res = passwordRank('John2022');

	expect(res).toBe('ветхий пароль');
});

test('Тест. password: "inVar$17_228Україна"', () => {
	const res = passwordRank('inVar$17_228Україна');

	expect(res).toBe('надёжный пароль');
});

test('Тест. password: "zaq123QWE!qwe"', () => {
	const res = passwordRank('zaq123QWE!qwe');

	expect(res).toBe('сильный пароль');
});

test('Тест. password: "zaqQWE321_"', () => {
	const res = passwordRank('zaqQWE321_');

	expect(res).toBe('ненадёжный пароль');
});

test('Auto: random outcomes', () => {
	let failed = false;

	const getStr = () => {
		let str = '';
		const iterations = getRandomInt(0, 40);

		for (let i = 0; i < iterations; i++) {
			str += String.fromCharCode(getRandomInt(33, 126));
		}

		return str;
	};

	for (let i = 0; i < 100; i++) {
		const str = getStr();

		if (solution(str) !== passwordRank(str)) {
			failed = 'failed';
			break;
		}
	}

	expect(failed).not.toBe('failed');
});