import Close from "../../assets/Close.svg"
import "./infoPopUp.scss"

type InfoPopUpProps = {
    onCloseCSS: () => void
}

function InfoPopUp({onCloseCSS}: InfoPopUpProps) {
    function findX () {
        const div = document.querySelector('.CSSInputs')
        if (div != null) {
            const rect = div.getBoundingClientRect()
            const leftX = rect.left
            return (leftX - 230)
        }
    }


    const style: {} = {
        position: 'absolute',
        top: "55px",
        left: findX(),
    };

    return (
        <div className="infoPopUp" style={style}>
            <div className="topInfo">
                <div onClick={onCloseCSS}><img className="closeHelp" src={Close} alt="" /></div>
            </div>
            <div className="tInfo">
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"1) Height: Property that specifies the height of an element. Types of inputs: px, em, %, auto, vh, etc. Example: 150px"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"2) Min height: Property that sets the minimum height of an element. Types of inputs: px, em, %, etc. Example: 50px"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"3) Max height: Property that sets the maximum height of an element. Types of inputs: px, em, %, etc. Example: 340px"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"4) Width: Property that sets an element's width. Types of inputs: px, em, %, auto, vh, etc. Example: 20em"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"5) Min width: Property that sets the minimum width of an element. Types of inputs: px, em, %, etc. Example: 50px"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"6) Max width: Property that sets the maximum width of an element. Types of inputs: px, em, %, etc. Example: 400px"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"7) Margin: property sets the margin area on all four sides of an element. Types of inputs: px, em, %, auto, vh, etc. Margin: 5px - applied to all four sides, Margin: 5% auto - top and bottom | left and right, Margin: 1em auto 2em - top | left and right | bottom, Margin: 2px 1em 0 auto - top | right | bottom | left."}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"8) Padding: property sets the padding area on all four sides of an element. Types of inputs: px, em, %, auto, vh, etc. Padding: 5px - applied to all four sides, Padding: 5% auto - top and bottom | left and right, Padding: 1em auto 2em - top | left and right | bottom, Padding: 2px 1em 0 auto - top | right | bottom | left."}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"9) Display: sets whether an element is treated as a block or inline element and the layout used for its children, such as grid or flex. Types of inputs: block, flex, grid. Example: flex"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"10) Justify content: defines how the browser distributes space between and around content items along the main-axis of a flex container. Types of inputs: center, start, end, space-between, space-around, space-evenly, stretch. Example: space-between"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"11) Align items: defines how the browser distributes space between and around content items along the cross-axis of a flex container. Types of inputs: center, start, end, stretch, baseline. Example: end"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"12) Flex direction: sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed). Types of inputs: row, row-reverse, column, column-reverse. Example: column-reverse"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"13) Grid: specifies one axis using grid-template-rows or grid-template-columns, you then specify how content should auto-repeat in the other axis using the implicit grid properties: grid-auto-rows, grid-auto-columns, and grid-auto-flow. Example: repeat(3, 80px) / auto-flow"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"14) Border: sets an element's border. It sets the values of border-width, border-style, and border-color. Border: solid - style, Border: 2px dotted - width | style, Border: medium dashed green - width | style | color"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"15) Border radius: rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners. Types of inputs: px, em, %, etc. Border radius: 10px - radius is set for all 4 sides, Border radius: 10px 5% - top-left-and-bottom-right | top-right-and-bottom-left, Border radius: 2px 4px 2px - top-left | top-right-and-bottom-left | bottom-right, Border radius: 1px 0 3px 4px - top-left | top-right | bottom-right | bottom-left."}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"16) Color: sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. Types of inputs: HEX-color, rgb()-color, hsl()-color, hwb()-color. Example: #090"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"17) Font family: specifies a prioritized list of one or more font family names and/or generic family names for the selected element. Example: 'Gill Sans', sans-serif"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"18) Font size: sets the size of the font. Types of inputs: px, em, %, large, small, x-small, etc. Example: 16px"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"19) Font style: sets whether a font should be styled with a normal, italic, or oblique face from its font-family. Types of inputs: normal, italic, oblique, oblique 10deg. Example: italic"}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;{"20) Font weight: sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set. Types of inputs: normal, bold, 500, 800, etc. Example: 300"}</p>
            </div>
        </div>
    );
}

export default InfoPopUp