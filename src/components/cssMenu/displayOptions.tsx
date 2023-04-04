function DisplayOptions(onNewGrid, newGrid, ) {
    return (
        <div>
            {}
            
            <div className="grid inputCont">
                <div className="inpText">Grid</div>
                <input type="text" className="rightInput" onChange={onNewGrid} value={newGrid}/>
            </div>
        </div>
    )
}

export default DisplayOptions