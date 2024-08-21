import { useDisclosure } from '@mantine/hooks'
import { Modal, Button } from '@mantine/core'

function Demo() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  )
}
