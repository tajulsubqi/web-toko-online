import React, { useEffect, useRef } from "react"

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
  size?: "small" | "large"
}

const Modal = ({ children, onClose, size }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscapeKey)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        ref={ref}
        className={`bg-white rounded-md max-w-full max-h-80vh overflow-auto ${
          size === "small" ? "w-[20vw] p-6" : "w-[50vw] p-10 "
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
