import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

const SubmitModal = ({ onCloseModal }) => {
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => onCloseModal()

    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <Modal isOpen={isOpen} toggle={closeModal} className='submitmodal'>
            <ModalHeader toggle={toggle}>
                Your Completed Assessment Has Been Received.
                For more information about anxiety and depression ahead of your appointment, please refer to the resource links below.
            </ModalHeader>
            <ModalBody>
                <ul>
                    <li>
                        <a
                            href='https://www.nimh.nih.gov/health/topics/anxiety-disorders'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            National Institute of Mental Health - Anxiety
                            Disorders
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://adaa.org/understanding-anxiety'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Anxiety and Depression Association of America -
                            Understanding Anxiety
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://psychcentral.com/anxiety'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Psych Central - Anxiety
                        </a>
                    </li>
                </ul>
            </ModalBody>
        </Modal>
    )
}

export default SubmitModal
