const express = require("express");
const router = express();

router.get('/', (req, res) => {
    res.send(`This the logout right here`);
});

module.exports = router;