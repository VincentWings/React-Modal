# Modal Component (React version of jquery.modal)

A lightweight and flexible modal component for React, inspired by [jquery-modal](https://github.com/kylefox/jquery-modal). Supports context-based triggering, animations, accessibility, and customization.

## ✨ Features
- Accessible (focus trap, ESC to close)
- Custom fade duration and delay
- Optional close on overlay click
- Optional spinner for async loading
- Simple usage via hook: `useModal()`
- Inspired by jQuery plugin API: `<a href="#modal-id" rel="modal:open">`

---

## ⚙ Usage

### 1. Setup in `Router.jsx` or at root level
Wrap your application with the `ModalProvider`:

```jsx
import { ModalProvider } from './components/Modal/ModalManager';

function AppRouter() {
  return (
    <ModalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
        <Footer />
      </Router>
    </ModalProvider>
  );
}
```

### 2. Open modal from any component

```jsx
import { useModal } from '../components/Modal/ModalManager';

function MyComponent() {
  const { openModal, closeModal } = useModal();

  const handleClick = () => {
    openModal(<p>Hello from modal!</p>);
  };

  return <button onClick={handleClick}>Show Modal</button>;
}
```

---

## ⚖ Options

The modal supports the following props:

```jsx
<Modal
  isOpen={true}              // Show/hide the modal
  onClose={() => {}}         // Function to close modal
  fadeDuration={300}         // Transition duration in ms
  fadeDelay={0.5}            // Delay before modal appears
  escapeClose={true}         // Allow ESC to close
  clickClose={true}          // Allow overlay click to close
  closeExisting={true}       // Close any open modal before showing new
  showSpinner={true}         // Show spinner when no children
  spinnerHtml={<div className="spinner" />}>
  Modal content here
</Modal>
```

---

## ✨ Events
(Planned or optional extension)
You can trigger custom events similar to the jQuery version, e.g.:

- `modal:before-open`
- `modal:open`
- `modal:before-close`
- `modal:after-close`

---

## 🔗 Migrating from jQuery
- Replace any `rel="modal:open"` with `onClick={() => openModal(...)} `
- Replace AJAX loaders with conditional rendering or async components
- `useModal()` gives you full control

---

## ✅ Accessibility
- Focus is trapped inside the modal while open
- First focusable element is auto-focused
- Escape key closes the modal

---

## 🏠 Styling
CSS variables you can override:

```css
:root {
  --overlay-bg: rgba(0, 0, 0, 0.5);
  --modal-shadow: rgba(0, 0, 0, 0.2);
  --fade-duration: 300ms;
}
```

You can also animate with `modal-overlay.open` and `modal.open` classes.

---

## ⚡ Example
```jsx
<button onClick={() => openModal(<p>Employee saved!</p>)}>Save</button>
```

---

## 👀 To Do / Ideas
- Support AJAX/spinner for async fetch
- Custom modal header/footer slots
- Accessibility unit tests
- Modal stacking support
