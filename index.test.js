var calcObj = require("./index");

describe("pow", function () {
	var x, n;

	describe("calculatePow", function () {
		describe("n more than 0", function () {
			Test("x = 2, n = 2, return 4", function () {
				x = 2;
				n = 2;

				expect(calcObj.calculatePow(x, n)).toEqual(4);
			});

			Test("x = 3, n = 2, return 9", function () {
				x = 3;
				n = 2;

				expect(calcObj.calculatePow(x, n)).toEqual(9);
			});
		});

		describe("pow = 0", function () {
			Test(" x = 0, n = 4, return 0", function () {
				x = 0;
				n = 4;

				expect(calcObj.calculatePow(x, n)).toEqual(0);
			});

			Test(" x = 0, n = MAX_SAFE_INTEGER , return 0", function () {
				x = 0;
				n = Number.MAX_SAFE_INTEGER;

				expect(calcObj.calculatePow(x, n)).toEqual(0);
			});
		});

		describe("pow = 1", function () {
			Test(" x = 1, n = any namber, return 1", function () {
				x = 1;
				n = Number.MAX_SAFE_INTEGER;

				expect(calcObj.calculatePow(x, n)).toEqual(1);
			});

			Test(" x = any number, n = 0, return 1", function () {
				x = Number.MAX_SAFE_INTEGER;
				n = 0;

				expect(calcObj.calculatePow(x, n)).toEqual(1);
			});

			Test(" x = 1, n = 0 , return 1", function () {
				x = 1;
				n = 0;

				expect(calcObj.calculatePow(x, n)).toEqual(1);
			});
		});

		describe(" n < 0 ", function () {
			Test(" x = 2, n = -1, return 0.5", function () {
				x = 2;
				n = -1;

				expect(calcObj.calculatePow(x, n)).toEqual(0.5);
			});
		});

		describe(" n = 1 ", function () {
			test(" x = 3, n = 1, return 3", function () {
				x = 3;
				n = 1;

				expect(calcObj.calculatePow(x, n)).toEqual(3);
			});
		});

	});
});