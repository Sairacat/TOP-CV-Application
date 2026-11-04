import { useState } from 'react';
import { ButtonCard } from './ButtonCard';
import '../styles/selection.css'
import arrowRight from '../assets/arrow-right.svg'
import arrowLeft from '../assets/arrow-left.svg'

function Selection({handleForward, handleBackward, updateTemplate, templateIndex}) {
    const [selectedIndex, setSelectedIndex] = useState(templateIndex === null ? 0 : templateIndex);
    console.log(selectedIndex);

    function toFormPage() {
        updateTemplate(selectedIndex);
        handleForward();
    }

    function toStartPage() {
        updateTemplate(selectedIndex)
        handleBackward();
    }

    return(
        <div className="selection-container">
            <section id="selection">
                <header>
                    <h1>Choose your layout</h1>
                </header>
                <div className="layout-zone">
                    <button onClick={toStartPage} className="page-button">
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