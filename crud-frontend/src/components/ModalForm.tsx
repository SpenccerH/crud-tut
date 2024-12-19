import { useState } from "react"

export default function ModalForm({ isOpen, onClose, mode, onSubmit } : {isOpen: boolean, onClose: () => void, mode: string, onSubmit: () => void}) {

    const [title, setTitle ] = useState('');
    const [time, setTime ] = useState('');
    const [meal, setMeal ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    }

    return (
        <>
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Recipe' : 'Recipe Details'}</h3>
                    <form method="dialog" onSubmit={handleSubmit}>
                        <label className="input input-bordered my-4 flex items-center gap-2">
                            Recipe Name
                            <input type="text" className="grow" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </label>
                        <label className="input input-bordered my-4 flex items-center gap-2">
                            Meal Type
                            <input type="text" className="grow" value={time} onChange={(e) => setTime(e.target.value)} />
                        </label>
                        <label className="input input-bordered my-4 flex items-center gap-2">
                            Total Time
                            <input type="text" className="grow" value={meal} onChange={(e) => setMeal(e.target.value)} />
                        </label>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                        <button className="btn btn-success mt-4">{mode === 'edit' ? 'Save Changes' : 'Add Recipe'}</button>
                    </form>
                </div>
            </dialog>
        </>
    )
}