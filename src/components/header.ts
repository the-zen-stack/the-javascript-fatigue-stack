import { ThemeToggle } from "./theme-toggler.ts";

export const Header = (): string => /*html*/ `
<nav class="navbar">
    <div class="nav-content">
        <a href="/" class="nav-brand">Blog</a>
        <div class="nav-links">
            <a href="/">Home</a>
            <a href="/new-post">New Post</a>
        </div>
        ${ThemeToggle()}
    </div>
</nav>`;
