const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const allTheLinksInsideNav = document.querySelectorAll('nav a');
// console.log(allTheLinksInsideNav)

// allTheLinksInsideNav.forEach.style.color = 'green';

allTheLinksInsideNav.forEach( (item) => {
  item.style.color = 'green';
});


const navBar = document.querySelector('nav');

const navItem1 = allTheLinksInsideNav[0];
const navItem2 = allTheLinksInsideNav[1];
const navItem3 = allTheLinksInsideNav[2];
const navItem4 = allTheLinksInsideNav[3];
const navItem5 = allTheLinksInsideNav[4];
const navItem6 = allTheLinksInsideNav[5];

navItem1.textContent = 'Services'
navItem2.textContent = 'Products'
navItem3.textContent = 'Vision'
navItem4.textContent = 'Features'
navItem5.textContent = 'About'
navItem6.textContent = 'Contact'

const newLink1 = document.createElement('a')
newLink1.textContent = 'Blog'
newLink1.href = '#'
navBar.appendChild(newLink1)

const newLink2 = document.createElement('a')
newLink2.textContent = 'Home'
newLink2.href = '#'
navBar.prepend(newLink2)


const imgLogo = document.querySelector('img#logo-img')
console.log(imgLogo)
imgLogo.src = 'img/logo.png';

const ctaHeader = document.querySelector('h1');
ctaHeader.textContent = 'DOM Is Awesome';

const ctaButton = document.querySelector('button');
ctaButton.textContent = 'Get Started';

const ctaImage = document.querySelector('img#cta-img');
ctaImage.src = 'img/header-img.png';


let topH4 = document.querySelectorAll('.top-content h4');
let topP = document.querySelectorAll('.top-content p');

topH4[0].textContent = siteContent['main-content']['features-h4'];

topP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

topH4[1].textContent = 'About';

topP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const middleImg = document.querySelector('img#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

let bottomH4 = document.querySelectorAll('.bottom-content h4');
let bottomP = document.querySelectorAll('.bottom-content p');

bottomH4[0].textContent = 'Services';

bottomP[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

bottomH4[1].textContent = 'Product';

bottomP[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

bottomH4[2].textContent = 'Vision';

bottomP[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = 'Contact';

let contactPs = document.querySelectorAll('.contact p');

contactPs[0].textContent = '123 Way 456 Street Somewhere, USA';
contactPs[1].textContent = '1 (888) 888-8888';
contactPs[2].textContent = 'sales@greatidea.io';

const footerP = document.querySelector('footer p');
footerP.textContent = 'Copyright Great Idea! 2018';



