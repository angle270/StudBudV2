// Creating navigation class structure
class Navigation {

    // Function to build the object, taking in input paramters when called in script.js
    constructor(links, pages) {
        this.links = links;
        this.pages = pages;
        this.currentPage = null;
    }

    // Output all links from DOM element selector
    getLinks() {
        console.log(this.links);
    }

    // Set the current page when a user clicks on a link

    setPage(pageId) {
        this.currentPage = pageId;
        console.log(this.currentPage);

        // Manages state for the current active link 
        this.links.forEach((link) => {
            link.classList.remove('active');
            if (this.getHash(link) === pageId) {
                link.classList.add('active');
            }
        })

        // Manages state for the current visible page
        this.pages.forEach((page) => {
            page.style.display = 'none';
        })
        document.getElementById(pageId).style.display = "block";
    }

    // Function to separate pageId from URL, using the '#' to split the string
    getHash(link) {
        return link.href.split("#")[1];
    }
}

// Exports the class as a JS module
export default Navigation;