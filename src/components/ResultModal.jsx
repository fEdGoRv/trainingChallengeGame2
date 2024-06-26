import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';


const ResultModal = forwardRef(function ({ onReset, targetTime, timeRemaining }, ref) {
    const userLost = timeRemaining <= 0;
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
    const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return createPortal( <dialog className="result-modal" ref={dialog}>
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>Your score is {score}</h2>}
        <p>The target time was <strong>{targetTime}</strong> seconds.</p>
        <p>You stopped the timer with<strong> {formattedRemainingTime} seconds left.</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById('modal')
);
})

export default ResultModal;