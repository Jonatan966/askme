import Modal from 'react-modal'

import { Button } from '@components/Button'
import { ModalState } from '@hooks/useModal'
import { useTheme } from '@hooks/useTheme'

import deleteImg from '@assets/images/delete.svg'

import './styles.scss'

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
  const { currentTheme } = useTheme()

  async function handleConfirm() {
    await onConfirm(modalState.aditionalData)
    handleCloseModal()
  }

  return (
    <Modal
      isOpen={modalState.isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName='modal-overlay'
      className={`modal-content confirm-modal ${currentTheme}`}
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
    </Modal>
  )
}
