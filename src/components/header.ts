import { APP_TITLE } from "../constants.ts";
import { ThemeToggle } from "./theme-toggler.ts";

export const Header = (): string => /*html*/ `
<nav class="navbar">
    <div class="nav-content">
        <a href="/" class="nav-brand">${APP_TITLE}</a>
        <div class="nav-links">
            <a href="/">Home</a>
            <a href="/posts">Posts</a>
            <a href="/posts/new-post">New Post</a>
        </div>
        ${ThemeToggle()}
    </div>
</nav>`;
