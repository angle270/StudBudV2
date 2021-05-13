// Import as a module
import Navigation from './components/navigation';

//Import just as JS
import './components/tasklist';


// DOM elements for links and pages
const links = document.querySelectorAll('.top-nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');

// Instantiate a new instance of the Navigation class using the DOM elements above as parameters
var nav = new Navigation(links, pages);

// Event listeners for all links
nav.links.forEach(function(link) {
    link.addEventListener('click', function() {
        let pageId = nav.getHash(link);
        nav.setPage(pageId);
    })
})
