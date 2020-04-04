import React from 'react';
import './TakeTask.scss';

export default function TakeTask({ name, onClose }) {
    return (
        <section>
            <div className="u-modal-backdrop" onClick={() => onClose(false)}></div>
            <div className="u-modal-container">
                <h2 className="take-task-header">Take Task</h2>
                <img src="https://res.cloudinary.com/thelegend27/image/upload/v1586022640/svg/take_task_image_sivywz.svg"
                    alt="celebration" />
                <p className="thanks-caption">Thanks for helping out</p>
                <p className="mb20">{name} has 2 hours to accept your task</p>
                <button className="btn bg-primary" onClick={() => onClose(true)}>Confirm</button>
            </div>
        </section>
    )
}