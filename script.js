const showingSubMenu = false;
var menuLinks = [
    {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
  ];

// Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector("main")
console.log(mainEl)

// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)"

// Set the content of mainElto <h1>SEI Rocks!</h1>
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

// Add a class of flex-ctrto mainEl
mainEl.classList.add("flex-ctr")

// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu")

//Set the height topMenuElelement to be 100%
topMenuEl.style.height = "100%"
console.log(topMenuEl)
console.dir(topMenuEl)

//Set the background color of topMenuElto the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around")

//Iterate over the entire menuLinks array and for each "link" object:

    //Create an <a>element.

    //On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.

    //Set the new element's content to the value of the textproperty of the "link" object.

    //Append the new element to the topMenuElelement.
    
const generateLinks = () => {
    return menuLinks.forEach(link => {
        const newLink = document.createElement('a')
        newLink.innerText = link.text;
        newLink.setAttribute('href', link.href)
        topMenuEl.appendChild(newLink)
    })
}
generateLinks()

//Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

const subMenuEl = document.querySelector("#sub-menu")

//Set the height subMenuElelement to be 100%.

subMenuEl.style.height = "100%"

//Set the background color of subMenuElto the value stored in the --sub-menu-bg CSS custom property.

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

//Add the class of flex-aroundto the subMenuElelement.

subMenuEl.classList.add('flex-around')

//Set the CSS position property of subMenuElto the value of absolute.

subMenuEl.style.position = 'absolute'

//Set the CSS top property of subMenuElto the value of 0.

subMenuEl.style.top = '0'

//Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
// Declare a global showingSubMenuvariable and initialize it to false;

const topMenuLinks = document.querySelectorAll('a')

//Task 5.2
//Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault()method.

// The second line of code function should immediately return if the element clicked was not an <a>element.

// console.log the content of the <a>to verify the handler is working.

topMenuEl.addEventListener("click", event => {
    event.preventDefault()
    event.stopPropagation()
    if(event.target.nodeName !== 'A'){
        return 
    }
    console.log(event.target)
})

