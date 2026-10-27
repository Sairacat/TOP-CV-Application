import '../styles/selection.css'

function Selection({display, handleForward, handleBackward, updateTemplate}) {
    if(!display) return;

    return(
        <div className="selection-container">
            <section id="selection">
                <header>
                    <h1>Choose your layout</h1>
                </header>
                <div className="layout-zone">
                    <button>
                        <div className="layout1"></div>
                    </button>
                    <button>
                        <div className="layout2"></div>
                    </button>
                </div>
                <button onClick={handleBackward}>Back</button>
            </section>
        </div>
    )
}

export {Selection};