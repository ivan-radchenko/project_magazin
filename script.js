'use strict';
let mainNavButton = document.getElementById('mainNavButton');
let mainNavButtonClose = document.getElementById('mainNavBtnClose');

mainNavButton.addEventListener('click', function () {
    navDropOpen();
})
mainNavButtonClose.addEventListener('click', function () {
    mainNavClose();
})

function navDropOpen() {
    document.querySelector('.main-nav').classList.remove('main-nav--close');
    document.querySelector('.main-nav').classList.add('main-nav--open');
}

function mainNavClose() {
    document.querySelector('.main-nav').classList.remove('main-nav--open');
    document.querySelector('.main-nav').classList.add('main-nav--close');
}