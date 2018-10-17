// const express = require('express');
const path = require("path");
const router = require("express").Router();

router.get('/', (req, res) => {
    console.log('routes folder accessed');
})

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;