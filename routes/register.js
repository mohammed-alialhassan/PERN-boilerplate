const express = require("express");
const router = express();

router.get('/', (req, res) => {
    res.send(`You got a landing page? Wow that's amazing! But where's the CSS?`);
});

module.exports = router;