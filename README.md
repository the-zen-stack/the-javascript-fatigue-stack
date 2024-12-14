# The Javascript Fatigue Stack

Welcome to **The Javascript Fatigue Stack**, a minimalistic Node.js server template designed to eliminate JavaScript fatigue and simplify web development. With no runtime dependencies and a clean MVC architecture, it empowers developers to create robust applications with full control over their code.

## 🚀 Features

- **No Runtime Dependencies**: Build lightweight, fast applications with zero overhead.
- **Native Node.js**: Uses pure Node.js for server-side functionality.
- **Vanilla Frontend**: Write reusable components with only JavaScript, CSS, and HTML.
- **Server-Side & Client-Side Rendering**: Demonstrates both approaches seamlessly.
- **Simplicity**: Easy to understand and maintain, making it perfect for new and experienced developers alike.

## 📂 Project Structure

```
The-Zen-Stack/
├── .github/                    # GitHub configuration files
├── node_modules/               # Node.js dependencies (if any)
├── src/                        # Source code
│   ├── components/             # Frontend components
│   ├── core/                   # Core utilities and handlers
│   │   ├── id.core.ts          # ID utility
│   │   └── static-files-handler.core.ts # Static files handler
│   ├── routes/                 # Application routes
│   │   ├── home/               # Home route
│   │   │   ├── home.controller.ts   # Home controller
│   │   │   ├── home.routes.ts       # Home routing logic
│   │   │   └── home.view.ts         # Home view
│   │   └── posts/              # Posts feature
│   │       ├── components/     # Components for posts
│   │       ├── posts.controller.ts # Posts controller
│   │       ├── posts.model.ts      # Posts model
│   │       ├── posts.routes.ts     # Posts routing logic
│   │       ├── posts.view.ts       # Posts view
│   │       └── posts.types.ts      # Type definitions for posts
├── static/                     # Static assets
│   ├── css/                    # CSS stylesheets
│   │   ├── base.css            # Base styles
│   │   ├── buttons.css         # Button styles
│   │   ├── colors.css          # Color palette
│   │   ├── forms.css           # Form styles
│   │   └── navigation.css      # Navigation styles
│   └── constants.ts            # Static constants
```

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/the-zen-stack.git
   cd the-zen-stack
   ```

2. Install development dependencies (optional):
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   node server.js
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 🔧 Usage

- Use the `src/` directory to organize your application logic.
- Add new features in the `routes/` folder and follow the MVC pattern.
- Place reusable components in the `components/` subfolders.
- Add static assets like images, CSS, and JavaScript to the `static/` directory.

## 🖼️ Live Demo

Explore the live version of The Javascript Fatigue Stack here:
[The Javascript Fatigue Stack GitHub Page](https://<your-username>.github.io/the-zen-stack/)

## 🤝 Contributing

We welcome contributions to improve The Javascript Fatigue Stack! Here's how you can help:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the changes:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy coding with **The Javascript Fatigue Stack**! 🎉
