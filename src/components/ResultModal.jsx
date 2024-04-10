import {forwardRef} from 'react';

 const ResultModal= forwardRef(function({ result, targetTime }, ref) {
    return <dialog className="result-modal" ref={ref} open>
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime}</strong> seconds.</p>
        <p>You stopped the timer with<strong> X seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
})

export default ResultModal;