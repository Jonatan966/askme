// import Modal from 'react-modal'

import { Button } from '@components/Button'
import { ModalState } from '@hooks/useModal'

import deleteImg from '@assets/images/delete.svg'

import './overlay.scss'
import { TesteContainer } from './styles'

interface ConfirmModalProps {
  title: string;
  description: string;
  onConfirm: (aditionalData: any) => Promise<void>;

  modalState: ModalState<any>;
  handleCloseModal: () => void;
}

export function ConfirmModal({
  title,
  description,
  onConfirm,
  modalState,
  handleCloseModal
}: ConfirmModalProps) {
  async function handleConfirm() {
    await onConfirm(modalState.aditionalData)
    handleCloseModal()
  }

  return (
    <TesteContainer
      isOpen={modalState.isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName='modal-overlay'
      className='modal-content confirm-modal'
    >
      <img src={deleteImg} alt='Lixeira' />
      <h1>{title}</h1>
      <p>{description}</p>

      <div className="modal-footer">
        <Button className='cancel-button' onClick={handleCloseModal}>
          Cancelar
        </Button>

        <Button className='confirm-button' onClick={handleConfirm}>
          Sim
        </Button>
      </div>
    </TesteContainer>
  )
}
