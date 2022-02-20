/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/* Define Global Variables */

let i = 0,  //number of sections
    ul = document.querySelector('#navbar__list'),
    header = document.querySelector('.page__header'),
    main = document.querySelector('main'),
    links =  document.querySelectorAll('.sec')
    ;
   

links = Array.from(links);  // casting to array to enable adding new sections

/*Start Helper Functions */

// function that selects the list item in the ul-nav corresponds to the current active section in the viewport
function getActiveLink(section){
    links.forEach(function(link){
        if(link.getAttribute('href') === section.id)
            link.classList.add('your-active-link');
        else 
            link.classList.remove('your-active-link');
        })
    }
   

    /**
     * End Helper Functions
     * Begin Main Functions
     * 
     */


/* Build menu and sections */

    //function that adding a new section invoked when (add button) is clicked 
    function addNewSection() {
        i++;
        let li = document.createElement("li"),
            section = document.createElement('section'),
            div = document.createElement('div'),
            h2 = document.createElement('h2'),
            p1 = document.createElement('p'),
            p2 = document.createElement('p')
            ;
        
            
            li.textContent = `section ${i}`;
            p1.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod`;
            p2.textContent = `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`;
            h2.textContent = `section ${i}`;
            
            li.classList.add('sec',`sec${i}`);
            div.classList.add('landing__container');
            section.classList.add('section');
            
            section.id = `section${i}`;
            li.setAttribute('href',`section${i}`);    
            section.setAttribute('data-nav',`section ${i}`) ;
            
            ul.appendChild(li);
            div.appendChild(h2);
            div.appendChild(p1);
            div.appendChild(p2);
            section.appendChild(div);
            main.appendChild(section);
            
            links.push(document.querySelector(`.sec${i}`)); //push the new list item to the list of ul nav-bar
            scrollToView();
    };
    
    //function that removes the last section invoked when (remove button) is clicked 
    function removeSection() {
        if (ul.children.length === 0)   //if no sections remains on the page return
            return;
    
        i--;
        ul.removeChild(ul.lastElementChild);
        main.removeChild(main.lastElementChild);
        links.pop();
    };

//Scroll to section clicking on the list item
function scrollToView(){
    links.forEach(function(item){
        item.addEventListener('click',function(){
            document.getElementById(item.getAttribute('href')).scrollIntoView({behavior:"smooth",block:'center'});
        });
    });
}    

/**
 * End Main Functions
 * Begin Events
 * 
*/

//selecting the active section on the viewport
window.onscroll = function sectionInView(){
    document.querySelectorAll('section').forEach(function (section){
        if(section.getBoundingClientRect().top > -350 && section.getBoundingClientRect().top < 200){
            section.classList.add('your-active-class');
            getActiveLink(section);    // adding class to the corresponging list item and removes it from ohter items
           }
        else {
           section.classList.remove('your-active-class');
          
        }
    });
}

/*
Main()
*/

//Adding 4 sections as a start
for(let i = 0 ;i < 4 ;i++){
    addNewSection();
}

//function that claculates script performance  to ==> defined right after the head tag
window.onload = function(){
    let per = document.querySelector('.performance');
    per.textContent = `perfromance approximately  ${((performance.now() - t0) / 1000).toFixed(2)} seconds` ; 
    per.style.color = 'red';
}
scrollToView(); 
document.querySelector('.add').addEventListener('click', addNewSection);
document.querySelector('.remove').addEventListener('click', removeSection);

