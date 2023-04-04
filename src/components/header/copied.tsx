import "./copied.scss"

function Copied () {
    function findX () {
        const div = document.querySelector('.Code')
        if (div != null) {
            const rect = div.getBoundingClientRect()
            const leftX = rect.left
            return (leftX - 130)
        }
    }

    const style: {} = {
        position: 'absolute',
        top: "55px",
        left: findX(),
    };
    
    return (
        <div className="Copied" style={style}>
            The code is copied to the clipboard
        </div>
    )
}

export default Copied