import { createSelector } from "../core/id.core.ts";

const themeToggler = createSelector("theme-toggle");
const themeTogglerCircle = createSelector("theme-toggle-circle");

export const ThemeToggle = (): string => /*html*/ `
<div class="${themeToggler}">
    <div class="${themeTogglerCircle}"></div>
</div>

<script>
    // Theme Toggle Logic
    const themeToggle = document.querySelector('.${themeToggler}');
    const themeToggleContent = document.querySelector('.${themeTogglerCircle}');
    const htmlElement = document.documentElement;

    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    function setTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark-mode');
            themeToggle.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeToggleContent.innerHTML = 'dark';
        } else {
            htmlElement.classList.remove('dark-mode');
            themeToggle.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            themeToggleContent.innerHTML = 'light';
        }
    }

    // Initial theme setup
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (systemPrefersDark.matches) {
        setTheme('dark');
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        const currentTheme = themeToggle.classList.contains('dark') ? 'dark' : 'light';
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });

    // Listen for system theme changes
    systemPrefersDark.addListener((e) => {
        setTheme(e.matches ? 'dark' : 'light');
    });
</script>
<style>
.${themeToggler} {
    position: relative;
    width: 60px;
    height: 30px;
    background-color: var(--color-toggle-bg);
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.${themeTogglerCircle} {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
    background-color: var(--color-toggle-circle);
    border-radius: 50%;
    transition: transform 0.3s ease;
}

.${themeToggler} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
}
</style>
`;