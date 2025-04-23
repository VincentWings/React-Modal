# React Modal Manager

A lightweight and flexible modal component for React, inspired by [jquery-modal](https://github.com/kylefox/jquery-modal). Supports context-based triggering, animations, accessibility, and customization.

---

## Features

- ✅ Global modal management with `openModal` and `closeModal`
- ✅ Customizable modal appearance via props
- ✅ Accessible by default (focus trap, ARIA attributes)
- ✅ Supports any React node as modal content
- ✅ Lightweight and easy to integrate

---

## Installation

```bash
npm install @vincentwings/react-modal
```

---

## Usage

### 1. Wrap your app with `ModalProvider`

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ModalProvider } from '@vincentwings/react-modal'

ReactDOM.render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById('root')
)
```

---

### 2. Use the `useModal` hook to open modals from anywhere

```jsx
import React from 'react'
import { useModal } from '@vincentwings/react-modal'

function ExampleModalTrigger() {
  const { openModal, closeModal } = useModal()

  const handleOpen = () => {
    openModal(
      <div style={{ textAlign: 'center' }}>
        <h2>Modal Title</h2>
        <p>This is a simple modal content.</p>
        <button onClick={closeModal}>Close</button>
      </div>,
      {
        backgroundColor: '#fff',
        textColor: '#333',
        borderRadius: '10px',
        fadeDuration: 300,
        escapeClose: true,
        clickClose: true,
        showClose: true
      }
    )
  }

  return <button onClick={handleOpen}>Open Modal</button>
}
```

---

### 3. Modal Props Reference

| Prop              | Type     | Default               | Description                                          |
|-------------------|----------|-----------------------|------------------------------------------------------|
| `overlayColor`    | `string` | `'rgba(0, 0, 0, 0.4)'`| Background color of the overlay                      |
| `backgroundColor` | `string` | `'#fff'`              | Background color of the modal                        |
| `textColor`       | `string` | `'#2a2a2a'`           | Text color inside the modal                          |
| `borderRadius`    | `string` | `'12px'`              | Border radius of the modal                           |
| `closeText`       | `string` | `'\u00d7'`            | Text for the close button                            |
| `fadeDuration`    | `number` | `300`                 | Animation duration in milliseconds                   |
| `fadeDelay`       | `number` | `0.5`                 | Delay before showing modal (in seconds)              |
| `escapeClose`     | `boolean`| `true`                | Close modal on `Escape` key                          |
| `clickClose`      | `boolean`| `true`                | Close modal on overlay click                         |
| `showClose`       | `boolean`| `true`                | Show the close (\u00d7) button                        |
| `useTransform`    | `boolean`| `true`                | Animate modal with a vertical slide effect           |
| `useBorderRadius` | `boolean`| `true`                | Apply border radius to modal                         |

---

## Accessibility

- Traps focus inside the modal while open
- Supports `Escape` key to close (if `escapeClose` is enabled)
- Adds `aria-modal` and `role="dialog"` to the modal overlay

---

## Example Project

Want to see it in action? Check it out:
👉 https://github.com/VincentWings/HRnet