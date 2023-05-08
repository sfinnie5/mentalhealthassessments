import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

const SubmitModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Your Completed Assessment Has Been Received
                </ModalHeader>
                <ModalBody>
                    <ul>
                        <li>
                            <a
                                href='https://www.nimh.nih.gov/health/topics/anxiety-disorders'
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                National Institute of Mental Health - Anxiety
                                Disorders
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://adaa.org/understanding-anxiety'
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                Anxiety and Depression Association of America -
                                Understanding Anxiety
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://psychcentral.com/anxiety'
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                Psych Central - Anxiety
                            </a>
                        </li>
                    </ul>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default SubmitModal

