import React, { useState } from 'react';

const ForgetPassword = ({ target }) => {

    const [isInvitationSent, setIsInvitationSent] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const renderButton = () => {
        if (isInvitationSent) {
            return (
                <button type='button' className='btn w-full'>
                    Receive Recovery Link
                </button>
            )
        } else {
            return (
                <button type='button' className='btn w-full'>
                    <a href={`mailto:${email}`}>GO TO EMAIL</a>
                </button>
            )
        }
    }

    return (
        <div
            className='modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto'
            id={`${target}`} tabIndex='-1' aria-labelledby='exampleModalCenterTitle' aria-modal='true'
            role='dialog'>
            <div className='modal-dialog max-w-[680px] modal-dialog-centered relative w-auto pointer-events-none'>
                <div
                    className='modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding outline-none text-current'>
                    <div
                        className='modal-header flex flex-shrink-0 items-center justify-between bg-primaryColor-shade-300 p-4'>
                        <h5 className='text-xl font-bold leading-normal text-primaryColor uppercase'
                            id='exampleModalScrollableLabel'>
                            Forget Password
                        </h5>
                        <button type='button'
                                className='btn-close box-content w-4 h-4 p-1 !mr-0.5 text-black border-none  opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
                                data-bs-dismiss='modal' aria-label='Close'>
                        </button>
                    </div>
                    <div className='modal-body relative p-4'>
                        <div className='input-group'>
                            <label htmlFor='email' className='label'>Email address</label>
                            <input type='email'
                                   className='form-field bg-primaryColor-shade-300'
                                   id='email'
                                   value={email}
                                   onChange={e => setEmail(e.target.value)}
                                   placeholder='e.g. shiblysaikat@gmail.com'
                                   name='email'/>
                        </div>
                        {isInvitationSent && <p className='text-xl'>
                            A recovery link has been sent to your email address. <br/>
                            By clicking the link, you can change your password.
                        </p>}
                    </div>
                    <div className='modal-footer p-4'>
                        {renderButton()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
