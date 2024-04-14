const fs = require('fs');
const express = require('express');

const app = express();

const exp1 = fs.readFileSync('./cdexp/exp1.cpp', 'utf-8');
const exp2 = fs.readFileSync('./cdexp/exp2.txt', 'utf-8');
const exp3 = fs.readFileSync('./cdexp/exp3.txt', 'utf-8');
const exp5 = fs.readFileSync('./cdexp/exp5.cpp', 'utf-8');
const exp6 = fs.readFileSync('./cdexp/exp6.cpp', 'utf-8');
const exp7 = fs.readFileSync('./cdexp/exp7.txt', 'utf-8');
const exp8 = fs.readFileSync('./cdexp/exp8.cpp', 'utf-8');
const exp9 = fs.readFileSync('./cdexp/exp9.c', 'utf-8');

app.get('/exp1', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    const wrappedContent = `<pre>${exp1}</pre>`;
    res.send(wrappedContent);
});

app.get('/exp2', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(exp2);
});

app.get('/exp3', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(exp3);
});

app.get('/exp5', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(exp5);
});

app.get('/exp6', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(exp6);
});

app.get('/exp7', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(exp7);
});

app.get('/exp8', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(exp8);
});

app.get('/exp9', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(exp9);
});

app.listen(3000);
