import { Footer } from "../../components/footer.ts";
import { Header } from "../../components/header.ts";

export const HomePage = (): string => /*html*/ `<!DOCTYPE html>
<html>
<html lang="en">
<head>
  <title>Home page</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The "Javascript Fatigue" Stack - Eliminate JavaScript Fatigue</title>
    <style>
        :root {
            --primary-color: #1e40af;
            --secondary-color: #2563eb;
            --background-light: #f3f4f6;
            --text-dark: #1f2937;
            --text-light: #4b5563;
            --white: #ffffff;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: var(--background-light);
            color: var(--text-dark);
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
        }

        .text-center {
            text-align: center;
        }

        .header {
            margin-bottom: 3rem;
        }

        .header h1 {
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }

        .header p {
            max-width: 800px;
            margin: 0 auto;
            color: var(--text-light);
            font-size: 1.25rem;
        }

        .zen-gradient {
            background: linear-gradient(135deg, #e0f2fe, #bae6fd);
            border-radius: 1rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            margin-bottom: 3rem;
        }

        .zen-gradient h2 {
            color: var(--primary-color);
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr;
        }

        .features-list {
            list-style-type: disc;
            padding-left: 2rem;
            margin-top: 2rem;
            color: var(--primary-color);
        }

        .benefits-title {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 2rem;
        }

        .benefits {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-bottom: 3rem;
        }

        .benefit-card {
            background-color: var(--white);
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            text-align: center;
        }

        .benefit-card svg {
            width: 4rem;
            height: 4rem;
            color: var(--secondary-color);
            margin: 0 auto 1rem;
            display: block;
        }

        .benefit-card h3 {
            margin-bottom: 0.75rem;
            font-size: 1.25rem;
        }

        .cta {
            background-color: #e0f2fe;
            border-radius: 0.75rem;
            padding: 2rem;
            text-align: center;
        }

        .cta h2 {
            color: var(--primary-color);
            margin-bottom: 1.5rem;
        }

        .button-group {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }

        .btn {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }

        .btn-primary {
            background-color: var(--secondary-color);
            margin-top: 1rem;
            color: white;
        }

        .btn-secondary {
            background-color: white;
            color: var(--secondary-color);
            border: 1px solid var(--secondary-color);
        }

        .btn:hover {
            opacity: 0.9;
        }

        footer {
            text-align: center;
            color: var(--text-light);
            margin-top: 3rem;
        }

        #framework {
            text-decoration: line-through;
        }

        @media (max-width: 768px) {
            .grid,
            .benefits {
                grid-template-columns: 1fr;
            }

            .button-group {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header text-center">
            <h1>The "Javascript Fatigue" Stack</h1>
            <p>
                A full stack <span id="framework">framework</span> <b>template</b> for building web applications with <span>NodeJS</span> and <span>TypeScript</span> with <b>0 runtime dependencies</b>.
            </p>
        </header>

        <section class="zen-gradient">
            <h2>What is The "Javascript Fatigue" Stack?</h2>
            <div class="grid">

            <section>
                <p>
                    This is a minimalistic Node.js server template with no runtime dependencies. 
                    The only development dependencies are TypeScript (for type safety and development efficiency), 
                    @types/node (for Node.js type definitions), and 
                    Biome (an ESLint alternative, which can also be easily replaced with Prettier and ESLint if you like it better). 
                    It follows a simple MVC architecture, providing a clear example of how to structure your code.
                </p>
            </section>
            <br />
            <section>
                <p>
                    The template demonstrates how to use native Node.js features to build a server and Vanilla JavaScript for the frontend. 
                    It includes examples of both <strong>server-side rendering</strong> and <strong>client-side rendering</strong> 
                    while showcasing how to create reusable frontend components using only JavaScript, CSS, and HTML.
                </p>
            </section>
            <br />
            <section>
                <p>
                    With this template, you have complete control over your code—no frameworks, no unnecessary dependencies. 
                    It’s a robust starting point for any project, capable of achieving everything you’d expect from modern frameworks 
                    like Next.js or Express.
                </p>
            </section>
            </div>

            <a href="#" class="btn btn-primary">Get Started</a>

        </section>

        <section class="zen-gradient">
            <h2>Our Philosophy</h2>
            <p>
                The "Javascript Fatigue" Stack is inspired by the belief that simplicity leads to clarity. We aim to reduce the mental overhead that comes with 
                complex frameworks and tools, letting developers focus on their ideas rather than the intricacies of dependencies. 
                By embracing minimalism, we strive to provide a foundation that is both powerful and adaptable to any project.
            </p>
            <p>
                We believe in the principle of "less is more" and encourage developers to question the necessity of every dependency, 
                every abstraction, and every line of code. Our goal is to foster creativity, performance, and maintainability through simplicity.
            </p>
        </section>

        <section class="zen-gradient">
            <h2>Why Only JavaScript instead of TypeScript in The Frontend?</h2>
            <p>
                The "Javascript Fatigue" Stack uses only JavaScript for the frontend to demonstrate that modern web applications can be built without the need for 
                complex build tools or transpilers. By leveraging native browser features and APIs, we can create dynamic and interactive user interfaces 
                without the overhead of additional tooling.
            </p>
        </section>

        <footer>
            <p>© 2024 The "Javascript Fatigue" Stack. Simplicity in Web Development.</p>
        </footer>
    </div>
</body>
</html>`;
