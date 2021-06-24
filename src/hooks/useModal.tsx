import { useState } from "react";

export interface ModalState<S> {
  isOpen: boolean;
  aditionalData: S | null;
}

export function useModal<S>(): [ModalState<S>, (aditionalData: S) => void, () => void] {
  const [modalState, setIsModalOpen] = useState<ModalState<S>>({
    isOpen: false,
    aditionalData: null
  })

  const handleOpenModal = (aditionalData: S) => setIsModalOpen({
    isOpen: true,
    aditionalData
  })
  const handleCloseModal = () => setIsModalOpen({
    isOpen: false,
    aditionalData: null
  })

  return [modalState, handleOpenModal, handleCloseModal]
}
