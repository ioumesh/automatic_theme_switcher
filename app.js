// event listner adding
const themeswitcher = document.querySelector("#AutoTheme");
const default_theme = localStorage.getItem('theme') || "theme-light";
setTheme(default_theme);
themeswitcher.addEventListener('change', (event) => {
    setTheme(event.target.value);
    // console.log(event.target.value);
});
// for theme
function setTheme(theme) {
    theme=theme || 'theme-light';
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
    themeswitcher.value = theme;
}
