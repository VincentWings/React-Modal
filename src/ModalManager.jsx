import React, { useState, useContext, createContext } from 'react'
import Modal from './Modal'

// Create a React Context to provide modal functions and state
const ModalContext = createContext()

/**
 * Provides modal context to the entire application
 * Wrap the app with <ModalProvider> to enable the use of modals anywhere
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content that should have access to the modal context
 */
export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)           // Tracks if a modal is currently open
  const [modalContent, setModalContent] = useState(null) // Stores the content to display inside the modal
  const [modalOptions, setModalOptions] = useState({})   // Custom options to pass to the Modal component (animation, styles, etc.)

  /**
   * Opens a modal with the given content and optional configuration
   * It first closes any existing modal before opening the new one
   *
   * @param {React.ReactNode} content - The content to render inside the modal
   * @param {Object} options - Modal component props like backgroundColor, fadeDuration, etc.
   */
  const openModal = (content, options = {}) => {
    // Close any open modal first
    setIsOpen(false)

    // Then wait a tiny bit before opening a new one
    setTimeout(() => {
      setModalContent(content)
      setModalOptions(options) // Save modal customization options (like closeText or backgroundColor)
      setIsOpen(true)
    }, 10)
  }

  /**
   * Closes the modal and resets its content and options
   */
  const closeModal = () => {
    setIsOpen(false)
    setModalContent(null)
    setModalOptions({})
  }

  return (
    // Provide modal context to the children tree
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* Mounts the modal component with all saved options and content */}
      <Modal isOpen={isOpen} onClose={closeModal} {...modalOptions}>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  )
}

/**
 * Hook to use modal functionality from anywhere in the app
 * Usage: const { openModal, closeModal } = useModal()
 */
export const useModal = () => useContext(ModalContext)