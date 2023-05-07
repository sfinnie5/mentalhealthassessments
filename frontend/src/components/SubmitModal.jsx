import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const SubmitModal = () => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>
                    Your Completed Assessment Has Been Received
                </ModalHeader>
                <ModalBody>
                    <ul>
                        <li>
                            <a
                                href='https://www.nimh.nih.gov/health/topics/anxiety-disorders'
                                target='_blank'
                            >
                                National Institute of Mental Health - Anxiety
                                Disorders
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://adaa.org/understanding-anxiety'
                                target='_blank'
                            >
                                Anxiety and Depression Association of America -
                                Understanding Anxiety
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://psychcentral.com/anxiety'
                                target='_blank'
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
