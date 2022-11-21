function passwordRank(password) {
	function convertStringInChar(str) {
		str.split('');
		const arrChar = [];
		const index = 0;
		for (let i = 0; i < str.length; i++) {
			arrChar.push(str[i].charCodeAt(index));
		}
		return arrChar;
	}

	let finalGrade = 0;
	const arrPass = convertStringInChar(password);
	let smallLetter = true;
	let capitalLetter = true;
	let specialSymbol = true;
	let number = true;
	let amountSymbol = 0;

	for (let i = 0; i < arrPass.length; i++) {

		if (arrPass[i] > 96 && arrPass[i] < 123 && smallLetter || arrPass[i] > 1071 && arrPass[i] < 1112 && smallLetter || arrPass[i] === 1169 && smallLetter) {
			finalGrade += 1;
			smallLetter = false;
		} else if (arrPass[i] > 64 && arrPass[i] < 91 && capitalLetter || arrPass[i] > 1027 && arrPass[i] < 1072 && capitalLetter || arrPass[i] === 1168 && capitalLetter) {
			finalGrade += 1;
			capitalLetter = false;
		} else if (arrPass[i] > 31 && arrPass[i] < 48 && specialSymbol || arrPass[i] > 57 && arrPass[i] < 65 && specialSymbol || arrPass[i] > 90 && arrPass[i] < 97 && specialSymbol || arrPass[i] > 122 && arrPass[i] < 127 && specialSymbol) {
			amountSymbol += 1;
			if (amountSymbol === 2) {
				specialSymbol = false;
			}
		} else if (arrPass[i] > 47 && arrPass[i] < 58 && number) {
			finalGrade += 1;
			number = false;
		}
	}

	if (amountSymbol === 1) {
		finalGrade += 1;
	} else if (amountSymbol === 2) {
		finalGrade += 2;
	}

	if (arrPass.length >= 12) {
		finalGrade = finalGrade * 2;
	}

	if (finalGrade <= 3)  {
		return 'ветхий пароль';
	} else if (finalGrade > 3 && finalGrade <= 6) {
		return 'ненадёжный пароль';
	} else if (finalGrade > 6 && finalGrade <= 9) {
		return 'сильный пароль';
	} else if (finalGrade === 10) {
		return 'надёжный пароль';
	}
}

module.exports = passwordRank;