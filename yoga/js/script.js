window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    // info -> parent block/container of tabs
    // tab -> tab item block
    // tabContent -> content of each tab
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        // add/remove classes hide/show  
        //(can add to .hide style{display: none;})
        function hideTabContent(a) {
            for( let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);
        // switching active tab manipulating with classes hide/show
        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('show');
                tabContent[b].classList.add('show');
            }
        }
        // adding event on click showing only one active tab
        info.addEventListener('click', function(event){
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for(let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
});