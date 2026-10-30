import { useState } from 'react';
import { ButtonCard } from './ButtonCard';
import '../styles/selection.css'
import arrowRight from '../assets/arrow-right.svg'
import arrowLeft from '../assets/arrow-left.svg'

function Selection({handleForward, handleBackward, updateTemplate}) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    console.log(selectedIndex);

    function toFormPage() {
        const layout = selectedIndex === 0 ? 'layout1' : 'layout2'
        updateTemplate(layout);
        handleForward();
    }

    return(
        <div className="selection-container">
            <section id="selection">
                <header>
                    <h1>Choose your layout</h1>
                </header>
                <div className="layout-zone">
                    <button onClick={handleBackward} className="page-button">
                        <img src={arrowLeft} alt="To previous page" height="80"/>
                    </button>
                    <ButtonCard layout="layout1" isSelected={selectedIndex === 0} handleClick={() => setSelectedIndex(0)}/>
                    <ButtonCard layout="layout2" isSelected={selectedIndex === 1} handleClick={() => setSelectedIndex(1)}/>
                    <button onClick={toFormPage} className="page-button">
                        <img src={arrowRight} alt="To next page" height="80"/>
                    </button>
                </div>
            </section>
        </div>
    )
}

export {Selection};