/*const passwordVarifier = word => {
	if (word.length > 8) {
		alert('Wrong!!!');
		return false;
	} else {
		return word.length;
	}
};  else if (word.match(/[a-z]/) || word.match(/[A-Z]/)) {
		alert("Ah how cute. BUT IT'S WRONG!!!");
		return word;
	} 
};*/ //password mag niet langer zijn dan 8 characters //password mag niet null zijn //password moet tenminste 1 uppercase character hebben.
/* else if (word === null) {
		alert('All the wrong!!!');
		return word; 
	}*/ //password moet tenminste 1 lowercase character hebben.
//password moet tenminste 1 nummer hebben

passwordVarifier = word => {
	if (
		wordContainLower(word) &&
		wordNotNull(word) &&
		(checkWordLength(word) || wordContainUpper(word) || wordContainNumber(word))
	) {
		return word;
	} else {
		alert('Paswoord moet minimaal bla bla bla ');
	}
};

checkWordLength = word => {
	if (word.length <= 8) {
		return word;
	}
};

wordNotNull = word => {
	if (word !== '') {
		return word;
	}
};
wordContainUpper = word => {
	if (word.match(/[A-Z]/)) {
		return word;
	}
};

wordContainLower = word => {
	if (word.match(/[a-z]/)) {
		return word;
	}
};

wordContainNumber = word => {
	if (word.match(/[0-9]/)) {
		return word;
	}
};

/*return false;  */

module.exports = passwordVarifier;
