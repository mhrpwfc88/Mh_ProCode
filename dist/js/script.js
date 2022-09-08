let theme = 'light';

// document.querySelector('button').addEventListener('click', toggleDarkTheme);
document.getElementById('darkMode').addEventListener('click', toggleDarkTheme);
if(localStorage.getItem("theme") === 'dark'){
    document.documentElement.classList.add('dark');
};

function toggleDarkTheme(){
    if(localStorage.getItem("theme") === 'dark'){
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
    } else {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
    }
}
