'use strict';

let innerWidth = window.innerWidth;
const wrapper = document.querySelector('#wrapper');
const hdWrap = document.querySelector('#hd-wrap');
const hdInner = document.querySelector('.hd-inner');
const hdLogo = document.querySelector('.hd-logo');
const logoImg = document.querySelector('.logo-img');
const bnWrap = document.querySelector('.bn-wrap');
const menuTab = document.querySelector('#menu-tab');
const mobileMenuBtn = document.querySelector('.mobile-menu');
const mobileAnchor = document.querySelectorAll('#menu-tab > li > a');

const prevImg = document.querySelector('.pre-img img');
const mainImg = document.querySelector('.main-img img');
const nextImg = document.querySelector('.nt-img img');



let maxImglen = 3;
let mainImgIndex = 1;

let mobileMenuFlag = false;

mobileMenuBtn.addEventListener('click', function() {
    mobileMenuView(mobileMenuFlag);
});

wrapper.addEventListener('click', function() {
    mobileMenuView(true);
});

mobileAnchor.forEach(function(el){
    el.addEventListener('click', function(){
        mobileMenuView(true);
    });
});

window.addEventListener('scroll', function() {
    fixedNav();
});

window.addEventListener('resize', function() {
    innerWidth = window.innerWidth;
    fixedNav();
    if(innerWidth > 860) {
        menuTab.style.display = 'flex';
        mobileMenuBtn.classList.remove('mobile-menu-on');
    } else {
        menuTab.style.display = 'none';
    }
})


const prevBtn = document.querySelector('.prev-arrow > button');
const nextBtn = document.querySelector('.next-arrow > button');
prevBtn.addEventListener('click', function(){
    prevImgCn();
});

nextBtn.addEventListener('click', function(){
    nextImgCn();
})


/**
 * 
 * @brief mobile menu 활성화/비활성화 함수
 * @author JJH
 * @param bool 현재 mobile menu의 활성화 여부를 알려주는 논리값
 * @see see menu 내부 anchor 또는 wrapper를 클릭시 강제로 닫히게 true값을 줘서 함수를 호출한다.
 * 
 */
function mobileMenuView(bool) {
    if(innerWidth <= 860) {
        if(!bool) {
            mobileMenuFlag = true;
            mobileMenuBtn.classList.add('mobile-menu-on');
            menuTab.style.display = 'block';
        } else {
            mobileMenuFlag = false;
            mobileMenuBtn.classList.remove('mobile-menu-on');
            menuTab.style.display = 'none';
        }
    }
}

function fixedNav() {
    if(window.scrollY > 100) {
        hdWrap.classList.add('tb-hd-wrap');
        hdInner.classList.add('tb-hd-inner');
        hdLogo.classList.add('tb-hd-logo');
        logoImg.classList.add('tb-logo-img');
        bnWrap.classList.add('tb-bn-wrap');
    }

    if(window.scrollY < 100) {
        hdWrap.classList.remove('tb-hd-wrap');
        hdInner.classList.remove('tb-hd-inner');
        hdLogo.classList.remove('tb-hd-logo');
        logoImg.classList.remove('tb-logo-img');
        bnWrap.classList.remove('tb-bn-wrap');
    }
}

function prevImgCn() {
    mainImgIndex--;
    if(mainImgIndex < 1) {
        mainImgIndex = maxImglen;
        prevImg.src = `img/preview${mainImgIndex-1}.png`;
        mainImg.src = `img/preview${mainImgIndex}.png`;
        nextImg.src = `img/preview1.png`;
    } else if(mainImgIndex == 1) {
        prevImg.src = `img/preview${maxImglen}.png`;
        mainImg.src = `img/preview${mainImgIndex}.png`;
        nextImg.src = `img/preview${mainImgIndex+1}.png`;
    } else {
        prevImg.src = `img/preview${mainImgIndex-1}.png`;
        mainImg.src = `img/preview${mainImgIndex}.png`;
        nextImg.src = `img/preview${mainImgIndex+1}.png`;
    }
}

function nextImgCn() {
    mainImgIndex++;
    if(mainImgIndex > maxImglen) {
        mainImgIndex = 1;
        prevImg.src = `img/preview${maxImglen}.png`;
        mainImg.src = `img/preview${mainImgIndex}.png`;
        nextImg.src = `img/preview${mainImgIndex+1}.png`;
    } else if(mainImgIndex == maxImglen) {
        prevImg.src = `img/preview${mainImgIndex-1}.png`;
        mainImg.src = `img/preview${mainImgIndex}.png`;
        nextImg.src = `img/preview1.png`;
    } else {
        prevImg.src = `img/preview${mainImgIndex-1}.png`;
        mainImg.src = `img/preview${mainImgIndex}.png`;
        nextImg.src = `img/preview${mainImgIndex+1}.png`;
    }
}