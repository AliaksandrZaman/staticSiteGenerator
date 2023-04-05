import { useEffect, useState } from "react";
import "./cssMenu.scss"
import styles from "./styles";

type CSSMenuProps = {
    parentElement: HTMLElement;
};

function CSSMenu({ parentElement }: CSSMenuProps) {
    const [cssObject, setCssObject] = useState<{[key: string]: string}>(styles);
    const [newMaxWidth, setNewMaxWidth] = useState("")
    const [newMaxHeight, setNewMaxHeight] = useState("")
    const [newMinWidth, setNewMinWidth] = useState("")
    const [newMinHeight, setNewMinHeight] = useState("")
    const [newFontWeight, setNewFontWeight] = useState("")
    const [newFontStyle, setNewFontStyle] = useState("")
    const [newFontSize, setNewFontSize] = useState("")
    const [newFontFamily, setNewFontFamily] = useState("")
    const [newColor, setNewColor] = useState("")
    const [newBorderRadius, setNewBorderRadius] = useState("")
    const [newBorder, setNewBorder] = useState("")
    const [newGrid, setNewGrid] = useState("")
    const [newFlexDirection, setNewFlexDirection] = useState("")
    const [newAlignItems, setNewAlignItems] = useState("")
    const [newJustifyContent, setNewJustifyContent] = useState("")
    const [newDisplay, setNewDisplay] = useState("")
    const [newPadding, setNewPadding] = useState("")
    const [newMargin, setNewMargin] = useState("")
    const [newWidth, setNewWidth] = useState("")
    const [newHeight, setNewHeight] = useState("")
    const [newBGColor, setNewBGColor] = useState("")

    useEffect(() => {
        const cssArray = parentElement.style.cssText.split(";").map(elem => elem.trim())
        cssArray.pop()
        setCssObject((prevCssObject) => {
            const updatedCssObject = {...prevCssObject};
            cssArray.forEach((elem) => {
                const [property, value] = elem.split(":").map((item) => item.trim());
                if (value !== "") {
                    updatedCssObject[property] = value;
                }
            });
        return updatedCssObject;
    });
    }, []);

    useEffect(() => {
        setNewMaxWidth(cssObject["max-width"])
        setNewMaxHeight(cssObject["max-height"])
        setNewMinWidth(cssObject["min-width"])
        setNewMinHeight(cssObject["min-height"])
        setNewFontWeight(cssObject["font-weight"])
        setNewFontStyle(cssObject["font-style"])
        setNewFontSize(cssObject["font-size"])
        setNewFontFamily(cssObject["font-family"])
        setNewColor(cssObject["color"])
        setNewBorderRadius(cssObject["border-radius"])
        setNewBorder(cssObject["border"])
        setNewGrid(cssObject["grid"])
        setNewFlexDirection(cssObject["flex-direction"])
        setNewAlignItems(cssObject["align-items"])
        setNewJustifyContent(cssObject["justify-content"])
        setNewDisplay(cssObject["display"])
        setNewPadding(cssObject["padding"])
        setNewMargin(cssObject["margin"])
        setNewWidth(cssObject["width"])
        setNewHeight(cssObject["height"])
        setNewBGColor(cssObject["background-color"])
    }, [cssObject])

    useEffect(() => {
        parentElement.style.cssText = Object.entries(cssObject)
          .map(([key, value]) => `${key}: ${value};`)
          .join("");
    }, [cssObject, parentElement]);
    

    function onNewBGColor(event: React.ChangeEvent<HTMLInputElement>) {
        const newColor = event.target.value;
        setNewBGColor(newColor);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "background-color": newColor };
        });
    }

    function onNewHeight(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewHeight(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "height": value };
        });
    }

    function onNewWidth(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewWidth(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "width": value };
        });
    }

    function onNewMargin(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewMargin(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "margin": value };
        });
    }

    function onNewPadding(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewPadding(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "padding": value };
        });
    }

    function onNewDisplay(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewDisplay(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "display": value };
        });
    }

    function onNewJustifyContent(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewJustifyContent(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "justify-content": value };
        });
    }

    function onNewAlignItems(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewAlignItems(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "align-items": value };
        });
    }

    function onNewFlexDirection(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewFlexDirection(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "flex-direction": value };
        });
    }

    function onNewGrid(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewGrid(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "grid": value };
        });
    }

    function onNewBorder(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewBorder(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "border": value };
        });
    }

    function onNewBorderRadius(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewBorderRadius(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "border-radius": value };
        });
    }

    function onNewColor(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewColor(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "color": value };
        });
    }

    function onNewFontFamily(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewFontFamily(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "font-family": value };
        });
    }

    function onNewFontSize(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewFontSize(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "font-size": value };
        });
    }

    function onNewFontStyle(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewFontStyle(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "font-style": value };
        });
    }

    function onNewFontWeight(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewFontWeight(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "font-weight": value };
        });
    }

    function onNewMinHeight(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewMinHeight(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "min-height": value };
        });
    }

    function onNewMinWidth(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewMinWidth(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "min-width": value };
        });
    }

    function onNewMaxHeight(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewMaxHeight(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "max-height": value };
        });
    }

    function onNewMaxWidth(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setNewMaxWidth(value);
        setCssObject(prevCssObject => {
          return { ...prevCssObject, "max-width": value };
        });
    }

    return (
        <div className="CSSOpt">
            <div>
            <div className="height inputCont">
                <div className="inpText">Height</div>
                <input type="text" className="rightInput" onChange={onNewHeight} value={newHeight}/>
            </div>
            {newHeight === ""  && (
                <>
                    <div className="minHeight inputCont">
                        <div className="inpText">Min height</div>
                        <input type="text" className="rightInput" onChange={onNewMinHeight} value={newMinHeight}/>
                    </div>
                    <div className="maxHeight inputCont">
                        <div className="inpText">Max height</div>
                        <input type="text" className="rightInput" onChange={onNewMaxHeight} value={newMaxHeight}/>
                    </div>
                </>
            )}
            <div className="width inputCont">
                <div className="inpText">Width</div>
                <input type="text" className="rightInput" onChange={onNewWidth} value={newWidth}/>
            </div>
            {newWidth === "" && (
                <>
                    <div className="minWidth inputCont">
                        <div className="inpText">Min width</div>
                        <input type="text" className="rightInput" onChange={onNewMinWidth} value={newMinWidth}/>
                    </div>
                    <div className="maxWidth inputCont">
                        <div className="inpText">Max width</div>
                        <input type="text" className="rightInput" onChange={onNewMaxWidth} value={newMaxWidth}/>
                </div>
                </>
            )}
            <div className="margin inputCont">
                <div className="inpText">Margin</div>
                <input type="text" className="rightInput" onChange={onNewMargin} value={newMargin}/>
            </div>
            <div className="padding inputCont">
                <div className="inpText">Padding</div>
                <input type="text" className="rightInput" onChange={onNewPadding} value={newPadding}/>
            </div>
            <div className="backgroudColor inputCont">
                <div className="inpText">Backgroud color</div>
                <input className="colorInputs" type="color" onChange={onNewBGColor} value={newBGColor}/>
            </div>
            <div className="display inputCont">
                <div className="inpText">Display</div>
                <input type="text" className="rightInput" onChange={onNewDisplay} value={newDisplay}/>
            </div>
            {newDisplay === "flex" && (
                <>
                    <div className="justifyContent inputCont">
                        <div className="inpText">Justify content</div>
                        <input type="text" className="rightInput" onChange={onNewJustifyContent} value={newJustifyContent}/>
                    </div>
                    <div className="alignItems inputCont">
                        <div className="inpText">Align items</div>
                        <input type="text" className="rightInput" onChange={onNewAlignItems} value={newAlignItems}/>
                    </div>
                    <div className="flexDirection inputCont">
                        <div className="inpText">Flex direction</div>
                        <input type="text" className="rightInput" onChange={onNewFlexDirection} value={newFlexDirection}/>
                    </div>
                </>
            )}
            {newDisplay === "grid" && (
                <>
                    <div className="grid inputCont">
                        <div className="inpText">Grid</div>
                        <input type="text" className="rightInput" onChange={onNewGrid} value={newGrid}/>
                    </div>
                </>
            )}
            <div className="border inputCont">
                <div className="inpText">Border</div>
                <input type="text" className="rightInput" onChange={onNewBorder} value={newBorder}/>
            </div>
            <div className="borderRadius inputCont">
                <div className="inpText">Border radius</div>
                <input type="text" className="rightInput" onChange={onNewBorderRadius} value={newBorderRadius}/>
            </div>
            {parentElement.tagName === "P" && (
                <>
                    <div className="color inputCont">
                        <div className="inpText">Color</div>
                        <input type="color" className="colorInputs" onChange={onNewColor} value={newColor}/>
                    </div>
                    <div className="fontFamily inputCont">
                        <div className="inpText">Font family</div>
                        <input type="text" className="rightInput" onChange={onNewFontFamily} value={newFontFamily}/>
                    </div>
                    <div className="fontSize inputCont">
                        <div className="inpText">Font size</div>
                        <input type="text" className="rightInput" onChange={onNewFontSize} value={newFontSize}/>
                    </div>
                    <div className="fontStyle inputCont">
                        <div className="inpText">Font style</div>
                        <input type="text" className="rightInput" onChange={onNewFontStyle} value={newFontStyle}/>
                    </div>
                    <div className="fontWeight inputCont">
                        <div className="inpText">Font weight</div>
                        <input type="text" className="rightInput" onChange={onNewFontWeight} value={newFontWeight}/>
                    </div>
                </>
            )}
            </div>
        </div>
    )

}

export default CSSMenu
