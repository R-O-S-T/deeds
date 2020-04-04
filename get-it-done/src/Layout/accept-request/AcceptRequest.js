import React from 'react';
import './AcceptRequest.scss';

export default function AcceptRequest({ onClose, from, title }) {
    return (
        <section>
            <div className="u-modal-backdrop" onClick={() => onClose(false)}></div>
            <div className="u-modal-container">
                <h2 className="take-task-header">Someone wants to help!</h2>
                <span className="mt40">{from} wants to take your task</span>
                <img src="https://res.cloudinary.com/thelegend27/image/upload/v1586023663/svg/task_complete_image_podlzx.svg"
                    alt="celebration" />
                <p className="thanks-caption">{title}</p>
                <p>Do you accept the help?</p>
                <button className="btn bg-primary complete-button" onClick={() => onClose(true)}>Accept</button>
            </div>
        </section >
    )
}