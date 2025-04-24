# ✒️ TipTap Rich Text Editor Components

A modular, customizable collection of rich text editors powered by **TipTap**, **React**, and **Tailwind CSS** — designed for developers who want **editor flexibility without reinventing the wheel**.

This package provides both a **full-featured WYSIWYG editor** and a **lightweight, minimal variant**, suitable for dashboards, CMS platforms, writing tools, or any modern web app.

---

## 📦 Live Demo

[tip-tap-editors.vercel.app](https://tip-tap-editors.vercel.app/)

---

## 🧩 Editor Variants

### 🔥 Full-Featured Editor

Perfect for writing interfaces, knowledge bases, or content management systems.

- Rich text formatting: **bold**, _italic_, ~~strikethrough~~, <u>underline</u>
- Heading levels (H1–H6)
- Font family & size selection
- Text & background color pickers
- Links & image embeds
- Code blocks with syntax highlighting
- Undo / Redo history
- Alignment tools
- Zoom in/out + live **HTML view**
- Preview mode toggle

### ⚡ Simplified Editor

Ideal for comments, notes, or any use case needing clean, fast input.

- Core formatting (bold, italic, underline)
- Bullet & numbered lists
- Text alignment
- Minimal, distraction-free UI
- Optimized for performance and small bundles

---

## 🛠 Tech Stack

- **Editor Engine:** [TipTap](https://tiptap.dev/) (ProseMirror-based)
- **UI Framework:** React + TypeScript
- **Styling:** Tailwind CSS
- **Component Architecture:** Fully modular and reusable

---

## 📥 Installation

1. Clone the repository:

```bash
git clone https://github.com/taiyebnirjhar/tip-tap-editors.git
cd tiptap-editors
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

---

## 🧪 Usage & Integration

You can easily import either the **FullEditor** or **SimpleEditor** component into your app. Each editor is customizable via props — fonts, colors, toolbars, output formats, and more.

```tsx
import { FullEditor } from './components/FullEditor';
import { SimpleEditor } from './components/SimpleEditor';
```

_Note: Adjust import paths according to your file structure._

---

## 🧠 Why TipTap?

TipTap provides the power of ProseMirror without the headache. It’s developer-friendly, highly extensible, and actively maintained — making it a no-brainer choice for modern web apps that need rich text editing capabilities.

---

## 🚧 Work in Progress

- [ ] Mobile optimization
- [ ] Dark mode toggle
- [ ] Markdown support
- [ ] Toolbar customization via props
- [ ] Image upload with preview

---

## 🤝 Contributions

Want to contribute? Fork it, star it, open issues, or submit PRs! Whether it's a new extension or a toolbar tweak — your help is welcome.

---

## 📜 License

MIT — feel free to fork and build your own editor experience.

---

## ✨ Author

Made with ❤️ and ✨ by [@taiyebnirjhar](https://github.com/taiyebnirjhar)

---

> If this helped you build faster or smarter, drop a ⭐ and share it with fellow devs!
