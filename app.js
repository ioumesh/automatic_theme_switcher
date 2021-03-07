// event listner adding
const themeswitcher = document.querySelector("#AutoTheme");
const default_theme = localStorage.getItem('theme') || "theme-light";
navigator.geolocation.getCurrentPosition((position) => {
    let sunset = new Date().sunset(position.coords.latitude, position.coords.longitude);
    let sunrise = new Date().sunrise(position.coords.latitude, position.coords.longitude);

    if (isday(sunset, sunrise)) {
setTheme('theme-light')
    }
    else{
        setTheme('theme-dark') 
    }
    function isday(sunset, sunrise) {
        const nowHours = new Date().getHours();
        return nowHours >= sunrise.getHours() && nowHours < sunset.getHours();
    }
});
setTheme(default_theme);
themeswitcher.addEventListener('change', (event) => {
    setTheme(event.target.value);
    // console.log(event.target.value);
});
// for theme
function setTheme(theme) {
    theme = theme || 'theme-light';
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
    themeswitcher.value = theme;
}
