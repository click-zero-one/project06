'use strict'

const $ = document

const navMenu = $.querySelector('nav')
const menuBtn = $.querySelector('.menuButton')
const menu = $.querySelector('.mainMenu_small')
const itemsMenu = $.querySelectorAll('.mainMenu_small > ul > li')
const searchSign = $.querySelector('.searchSign')
const mainSearch = $.querySelector('#mainSearch')
const logo = $.querySelector('.logo')
const bgHeader = $.querySelector('.bg_Header')
const itemSlides = $.querySelector('.numbers_of_bg')
const itemsTxt = $.querySelectorAll('.item_labelTxt')
const tourBtn = $.querySelector('.showTourBtn')
const tours = $.querySelector('.second_sec_large')


const itemsContent = [
                       {numberSlide : '01' , picSlide : 'url(../img/1.gif)'} ,
                       {numberSlide : '02' , picSlide : 'url(../img/2.gif)'} ,
                       {numberSlide : '03' , picSlide : 'url(../img/3.gif)'} ,
                       {numberSlide : '04' , picSlide : 'url(../img/4.gif)'} ,
                       {numberSlide : '05' , picSlide : 'url(../img/5.gif)'} ,
                     ]

let indexContent = null
let viewPortSize = null
let flagMenu = false
let indexNext = 0
let indexPrevious = indexNext - 1
let arrayItemTxt = Array.from(itemsTxt)
let thirdSlid = itemSlides.firstElementChild.nextElementSibling.nextElementSibling



window.addEventListener('scroll' , ()=> {

    if($.documentElement.scrollTop >= 43) {
        navMenu.style.position = 'fixed'
        navMenu.style.top = '0px'
        navMenu.style.backgroundColor = 'black'
        navMenu.style.borderBottom = '2px solid red'
    }
    if ($.documentElement.scrollTop <= 43) {
        navMenu.style.position = 'absolute'
        navMenu.style.top = '43px'
        navMenu.style.backgroundColor = 'rgba(255, 0, 0, 0)'
        navMenu.style.borderBottom = '2px solid rgba(255, 255, 255, 0.55)'
    }
})

menuBtn.addEventListener('click' , ()=> {

    if (!flagMenu) {

        menu.style.height = '210px'
        flagMenu = true

    } else {

        menu.style.height = '0px'
        flagMenu = false 
    }
})

itemsMenu.forEach(element => {

    element.addEventListener('click' , ()=> {

        menu.style.height = '0px'
        flagMenu = false 
    })
})

searchSign.addEventListener('click' , () => {

    if (viewPortSize <= 464) {

        
        logo.style.opacity = '0%'

        setTimeout(() => {
            navMenu.style.justifyContent = 'flex-end'
            logo.style.display = 'none'
            mainSearch.style.width = '160px'
        }, 500);
    }
})

setInterval(() => {

    viewPortSize = window.innerWidth

    if (viewPortSize > 464) {

        navMenu.style.justifyContent = 'space-between'
        mainSearch.style.width = '200px'      
        logo.style.display = 'block'

        setTimeout(() => {

            logo.style.opacity = '100%'
        }, 500);
    }
},);

/************************************************* iter slide */

bgHeader.style.backgroundImage = itemsContent[2].picSlide

thirdSlid.style.transform = 'scale(1.2)'

thirdSlid.style.right = '6px'

thirdSlid.nextElementSibling.style.transform = 'scale(1.5)'

thirdSlid.nextElementSibling.style.right = '13px'

thirdSlid.nextElementSibling.nextElementSibling.style.transform = 'scale(1.2)'

thirdSlid.nextElementSibling.nextElementSibling.style.right = '6px'

setInterval(() => {

    let newItemBg = $.createElement('div')
    newItemBg.className = 'newItemBg'

    let thirdSlid = itemSlides.firstElementChild.nextElementSibling.nextElementSibling

    console.log(thirdSlid.nextElementSibling.nextElementSibling.innerHTML);

    let contentElement = itemSlides.lastElementChild.innerHTML

    let bgElement = thirdSlid.nextElementSibling.nextElementSibling.innerHTML


    let findIndexContent = itemsContent.findIndex( element => {

        return element.numberSlide == contentElement
    })

    let findIndexBg = itemsContent.findIndex( element => {

        return element.numberSlide == bgElement
    })

    bgHeader.style.backgroundImage = itemsContent[findIndexBg].picSlide

    if (findIndexContent !== 4) {
        indexContent = findIndexContent + 1
    } else {
        indexContent = 0
    }

    newItemBg.innerHTML = itemsContent[indexContent].numberSlide  /*** number slide iter */
       

    itemSlides.append(newItemBg)

    thirdSlid.
              nextElementSibling.
              nextElementSibling.
              nextElementSibling.style.transform = 'scale(1.2)'

    thirdSlid.
              nextElementSibling.
              nextElementSibling.style.transform = 'scale(1.5)'

    thirdSlid.
              nextElementSibling.
              nextElementSibling.style.right = '13px'

    thirdSlid.
              nextElementSibling.
              nextElementSibling.
              nextElementSibling.style.right = '6px'

    itemSlides.lastElementChild.style.animation = 'largerHeight .8s forwards'

    itemSlides.firstElementChild.style.animation = 'smallerHeight .8s forwards'

    thirdSlid.nextElementSibling.style.transform = 'scale(1.2)'

    thirdSlid.nextElementSibling.style.right = '6px'

    thirdSlid.style.transform = 'scale(1)'

    thirdSlid.style.right = '0px'


    setTimeout(() => {
        itemSlides.firstElementChild.remove()
    }, 800);
    
}, 5000);


/*********************************************************** location */

let iterTxt = setInterval(() => {

    arrayItemTxt[indexNext].className = 'actShowTxt'

    if(indexPrevious >= 0) {

        arrayItemTxt[indexPrevious].className = 'deActShowTxt'
    }
   
    indexNext += 1
    indexPrevious = indexNext - 1

    if (indexNext >= arrayItemTxt.length) {
        
        indexNext = 0     
    }

}, 200);

/************************************************************ main */

/****** card */

const cards = Array.from($.querySelectorAll('.container_card')) 

cards.forEach(element => {

    element.addEventListener('mouseenter' , () => {

        element.style.transform = 'scale(1.02)'
        element.style.borderBottom = ' 2px solid red'
        element.firstElementChild.nextElementSibling.style.opacity = '100%'
        element.firstElementChild.nextElementSibling.firstElementChild.style.opacity = '100%'
    })

    element.addEventListener('mouseleave' , () => {
    
        element.style.transform = 'scale(1)'
        element.style.borderBottom = ' 2px solid rgba(255, 0, 0, 0)'
        element.firstElementChild.nextElementSibling.style.opacity = '70%'
        element.firstElementChild.nextElementSibling.firstElementChild.style.opacity = '0%'
    })
})

tourBtn.addEventListener('click' , () => {

    tours.style.height = 'auto'
})

