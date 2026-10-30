function ButtonCard({layout, isSelected, handleClick}) {
    return(
        <button className={isSelected ? "isSelected" : ""} onClick={handleClick} id="button-card">
            <div className={layout}>
                <div className="info"></div>
                <div className="education"></div>
                <div className="work"></div>
            </div>
        </button>
    )
}

export {ButtonCard}