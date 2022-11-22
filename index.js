function passwordRank(password) {
	let finalGrade = 0;
	let upperCase = true;
	let lowerCase = true;
	let symbols = true;
	let number = true;
	let moreSymbol = 0;

	for (let i = 0; i < password.length; i++) {
		if (password[i].charCodeAt(0) < 32 ||
				password[i].charCodeAt(0) > 47 && password[i].charCodeAt(0) < 58 ||
				password[i].charCodeAt(0) > 64 && password[i].charCodeAt(0) < 91 ||
				password[i].charCodeAt(0) > 96 && password[i].charCodeAt(0) < 123 ||
				password[i].charCodeAt(0) > 126) {

			if (isNaN(Number(password[i]))) {

				if (password[i] === password[i].toUpperCase() && upperCase ) {
					finalGrade++;
					upperCase = false;
				} else if (lowerCase) {
					finalGrade++;
					lowerCase = false;
				}
			} else if (number) {
				finalGrade++;
				number = false;
			}
		} else if (symbols) {
			finalGrade++;
			moreSymbol++;

			if (moreSymbol === 2) {
				symbols = false;
			}
		}
	}

	if (password.length >= 12) {
		finalGrade *= 2;
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