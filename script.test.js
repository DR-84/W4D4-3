const passwordVarifier = require('./script.js');

const password = 'A';
//const unchanged = 'a1b2c3d4';

test('deze paswoord is GOED weet je!', function() {
	//komt hier iets uit
	//const expected = password;
	const output = passwordVarifier(password);

	expect(output).toBe(password);
	//expect(password).toEqual(unchanged);
});
/* test('deze paswoord is SLECHT weet je!', function() {
	//komt hier iets uit
	//const expected = password;
	const outputFalse = passwordVarifier(password);

	expect(outputFalse).toBe(undefined);
	//expect(password).toEqual(unchanged);
});
 */
/*  test('password NIET langer dan 8 characters', function() {
	//password mag niet langer zijn dan 8 characters
	const expected = 9;
	const output = passwordVarifier(password);
	 const outputFalse = passwordVarifier(password); 

	 expect(outputFalse).toBe(false); 
	expect(output).toBeLessThan(expected);
	expect(password).toEqual(unchanged);
});
 
test('password WEL langer dan 8 characters', function() {
	//password mag niet langer zijn dan 8 characters
	const expected = false;
	
	const outputFalse = passwordVarifier(password);

	expect(outputFalse).toBe(false);
	expect(output).toBeLessThan(expected);
	expect(password).toEqual(unchanged);
});

 test('password mag niet null zijn', function() {
	//password mag niet null zijn

	const output = passwordVarifier(password);

	expect(output).toBeNull();
	expect(password).toEqual(unchanged);
}); 
test('password moet tenminste 1 uppercase character hebben', function() {
	//password moet tenminste 1 uppercase character hebben
});
test('password moet tenminste 1 lowercase character hebben', function() {
	//password moet tenminste 1 lowercase character hebben.
});
test('password moet tenminste 1 nummer hebben', function() {
	//password moet tenminste 1 nummer hebben
}); 
 */
