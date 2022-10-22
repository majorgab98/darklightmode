const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Dark or Light Image
function imageMode(color){
    image1.src= 'undraw_proud_coder_light.svg';
    image2.src= 'undraw_feeling_proud_light.svg';
    image3.src= 'undraw_conceptual_idea_light.svg';

    image1.src= 'undraw_proud_coder_dark.svg';
    image2.src= 'undraw_feeling_proud_dark.svg';
    image2.src= 'undraw_feeling_proud_dark.svg';

}


// Dark Mode Styles
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    imageMode('dark');
}

// Light Mode Styles
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    imageMode('light');
}


//Switch Theme Dynamically
function switchTheme(event){
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);
