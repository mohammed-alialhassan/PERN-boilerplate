const express = require("express");
const router = express();

router.get('/', (req, res) => {
    res.send(`What a lovely login route you have here`);
});

module.exports = router;