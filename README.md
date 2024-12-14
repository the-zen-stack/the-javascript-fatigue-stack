# The Javascript Fatigue Stack

Welcome to **The Javascript Fatigue Stack**, a minimalistic Node.js server template designed to eliminate JavaScript fatigue and simplify web development. With no runtime dependencies and a clean MVC architecture, it empowers developers to create robust applications with full control over their code.

# 🚀 Features

## No Runtime Dependencies
<img width="943" alt="Screenshot 2024-12-14 at 22 02 36" src="https://github.com/user-attachments/assets/ba265c00-8fb2-4859-a57e-1c28e426c701" />

## Battle Tested Model - View - Controller (MVC) Architecture for Web Applications
![Screenshot 2024-12-14 at 22 36 15](https://github.com/user-attachments/assets/7e2519dc-e2dc-45e1-9485-7a18caf155a6)

## Frontend Components With HTML, CSS, Javascript
<img width="560" alt="image" src="https://github.com/user-attachments/assets/7bed3ab3-2177-4abb-b37d-9f69a6c118c6" />

note: Syntax highlight can be done using [this vscode extension](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)

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

1. Create a new repository by clicking here:
   ![image](https://github.com/user-attachments/assets/b23e2aaa-9ce1-4459-b791-ad104f4d0773)


2. Install dev development dependencies with pnpm or any other package manager:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 🔧 Usage

- Use the `src/` directory to organize your application logic.
- Add new features in the `routes/` folder and follow the MVC pattern.
- Place reusable components in the `components/` subfolders.
- Add static assets like images and CSS to the `static/` directory.

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
