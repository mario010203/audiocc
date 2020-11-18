const express = require("express");
const router = express.Router();

const { brackets, parentheses } = require("../lib/helpers");

/* GET home page */
router.get("/", (req, res, next) => {
	const input = "53+44";
	let bracketsCheck = brackets(input);

	if (bracketsCheck !== null) {
		bracketsCheck = bracketsCheck[1];
	}

	const result =
		bracketsCheck !== null ? parentheses(bracketsCheck) : parentheses(input);

	res.status(200).json(result);
});

module.exports = router;
