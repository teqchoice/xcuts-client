import React, { forwardRef, useImperativeHandle, Ref } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Modal } from '@mantine/core'

interface ChangePanelSizeConfirmationModalProps {
  children: React.ReactNode
}

export interface ChangePanelSizeConfirmationModalHandle {
  openModal: () => void
  closeModal: () => void
}

const ChangePanelSizeConfirmationModal = forwardRef<
  ChangePanelSizeConfirmationModalHandle,
  ChangePanelSizeConfirmationModalProps
>((props, ref) => {
  const [opened, { open, close }] = useDisclosure(false)

  useImperativeHandle(ref, () => ({
    openModal: () => open(),
    closeModal: () => close()
  }))

  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      withCloseButton={false}
      classNames={{
        body: '!rounded-none',
        content: '!rounded-none'
      }}
    >
      {props.children}
    </Modal>
  )
})

export default ChangePanelSizeConfirmationModal
