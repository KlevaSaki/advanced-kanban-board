# React + TypeScript + Vite

# Advanced Kanban Board with Drag and Drop Feature.

Overview

KanbanFlow is a fully-featured Kanban board application built with React 19 + TypeScript. It demonstrates advanced frontend engineering practices, including:

Context + Reducer for global state management

Normalized state for scalable architecture

Custom hooks for reusable logic

Performance optimizations with useMemo and useCallback

Drag-and-drop task management with dnd-kit

Controlled forms and validation with react-hook-form

This project was designed to showcase mid-to-senior level React skills in a real-world application scenario.

🛠 Features
Core

Add, edit, and delete tasks

Organize tasks in columns (Todo, In Progress, Done)

Drag-and-drop tasks between columns

Reorder tasks inside a column

Persist tasks in localStorage

Advanced

Priority-based task color coding

Keyboard accessibility shortcuts

Optimized rendering with memoization

Fully type-safe with TypeScript

Undo/Redo capability (future upgrade)

Multi-task drag selection (future upgrade)

Real-time collaboration simulation (future upgrade)

📁 Project Structure
src/
├── components/
│   ├── Board.tsx
│   ├── Column.tsx
│   ├── TaskCard.tsx
│   └── TaskForm.tsx
├── context/
│   └── KanbanProvider.tsx
├── reducers/
│   └── kanbanReducer.ts
├── hooks/
│   ├── useKanban.ts
│   └── useLocalStorage.ts
├── types/
│   └── kanbanTypes.ts
└── App.tsx
⚡ Key Concepts Demonstrated

Normalized State Architecture – keeps boards, columns, and tasks separate for easier updates.

React Context + useReducer – predictable global state management.

React Hooks – including useState, useEffect, useRef, useMemo, useCallback, useLayoutEffect.

Custom Hooks – reusable logic for Kanban state and localStorage.

Performance Optimization – memoization prevents unnecessary re-renders.

Drag-and-Drop – powered by dnd-kit, fully type-safe.

Form Handling – task forms handled with react-hook-form.

🎯 Learning Outcomes

By building KanbanFlow, I demonstrated:

Advanced state management in React

Building scalable and maintainable architecture

Using TypeScript for robust type safety

Integrating drag-and-drop features with modern libraries

Optimizing performance in complex React apps

Managing forms with react-hook-form

⚙ Installation

Clone the repo:

git clone https://github.com/yourusername/kanbanflow.git
cd kanbanflow

Install dependencies:

npm install

Start development server:

npm run dev

Open in your browser: http://localhost:5173

📝 Future Improvements

Multi-board support

Task filtering and search

Undo / redo functionality

Multi-task drag selection

Dark mode toggle

Virtualized task lists for performance with large boards

Real-time collaboration across multiple browser sessions

💡 What I Learned

How to normalize state in a React application for maintainability

Implement drag-and-drop functionality using dnd-kit

Structure a mid-to-senior level React project with Context, Reducers, and Hooks

How to manage complex forms with react-hook-form

Optimizing performance using useMemo and useCallback