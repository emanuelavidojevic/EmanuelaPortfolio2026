const splashNameText = "Emanuela Vidojević";
const typedSplashEl = document.getElementById("typedSplashName");
let splashIndex = 0;

function typeSplashName() {
    if (splashIndex < splashNameText.length) {
        typedSplashEl.textContent += splashNameText.charAt(splashIndex);
        splashIndex++;
        setTimeout(typeSplashName, 110);
    } else {
        setTimeout(() => {
            const splashScreen = document.getElementById('splash-screen');
            splashScreen.style.opacity = '0';
            splashScreen.style.visibility = 'hidden';
        }, 1000);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeSplashName, 400);
});

function openTab(evt, tabId) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
});

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navItems = document.getElementById('navItems');

if (mobileMenuBtn && navItems) {
    mobileMenuBtn.addEventListener('click', () => {
        navItems.classList.toggle('active');
    });
}

const roles = ["Backend Developer", "Web Designer", "Frontend Developer", "Full-Stack Developer", "Software Developer"];
let roleIndex = 0;
let charIndex = 0;
const heroRoleText = document.getElementById("heroRoleText");

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        heroRoleText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 2000);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        heroRoleText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

setTimeout(typeRole, 2500);

const csharpCode = `public class Portfolio {\n    public string Name => "Emanuela";\n    public string Degree => "Master IT";\n    public bool IsReadyToWork => true;\n}`;
const csharpCodeText = document.getElementById("csharpCodeText");
let csharpIndex = 0;

function typeCSharpCode() {
    if (csharpIndex < csharpCode.length) {
        csharpCodeText.textContent += csharpCode.charAt(csharpIndex);
        csharpIndex++;
        setTimeout(typeCSharpCode, 45);
    }
}

setTimeout(typeCSharpCode, 3000);

const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (entry.target.id === 'aboutBadgeContainer') {
                entry.target.classList.add('reveal');
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-from-left, .animate-from-right, .animate-fade-in, .education-section').forEach(el => {
    observer.observe(el);
});

const badgeContainer = document.getElementById('aboutBadgeContainer');
if (badgeContainer) {
    observer.observe(badgeContainer);
}