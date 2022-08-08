import React, {ReactNode} from 'react';
import s from '../styles/teststyle.module.css'


interface ModalProps {
    children: ReactNode
    title: string
}

const Modal = ({children, title}:ModalProps) => {
    return (
        <>
            <div className={s.parent}/>
            <div className={s.child}>
                <h1 className={'text-2xl text-center mb-2'}>{title}</h1>
                {children}
            </div>
        </>
    );
};

export {Modal};