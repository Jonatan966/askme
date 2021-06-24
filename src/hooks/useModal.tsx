import { useState } from "react";

export interface ModalState<S> {
  isOpen: boolean;
  aditionalData: S | undefined;
}

export function useModal<S = undefined>(): [ModalState<S>, (aditionalData?: S) => void, () => void] {
  const [modalState, setIsModalOpen] = useState<ModalState<S>>({
    isOpen: false,
    aditionalData: undefined
  })

  const handleOpenModal = (aditionalData?: S) => setIsModalOpen({
    isOpen: true,
    aditionalData
  })
  const handleCloseModal = () => setIsModalOpen({
    isOpen: false,
    aditionalData: undefined
  })

  return [modalState, handleOpenModal, handleCloseModal]
}
