import React, {useState, useEffect} from 'react'
import Button from '../button'
import './index.scss';
import useWindowSize from "../../hooks/useWindowSize"
import useFontsLoaded from '../../hooks/useFontsLoaded';
let firstTime = true 
export default function ExpandableText(props) {
    let collapsedTextRef = React.createRef();
    let data = props.text
    let linesCount = Number(props.linesCount) ? Number(props.linesCount) : 6
    const [expandVisible, setExpandVisible] = useState(false)
    const [collapsed, setCollapsed] = useState(true)
    const [maxHeight, setMaxHeight] = useState(1000)
    const size = useWindowSize();
    const fontsLoaded = useFontsLoaded()
    useEffect(() => {
        // Получаем размер шрифта
        let fontSize = parseInt(window.getComputedStyle(collapsedTextRef.current, null).getPropertyValue('font-size'))

        // Получаем высоту текстового поля, если свернут то на основе количества линий, если развернут то на основе высоты скролла
        setMaxHeight(collapsed ? `calc(${linesCount * 1.2}em - 3px)` : `${collapsedTextRef.current.scrollHeight}px`);

        setExpandVisible(linesCount * 1.2 * fontSize <= collapsedTextRef.current.scrollHeight)
        // Определяем показывать кнопку развернуть или нет
        
    }, [collapsedTextRef, collapsed, linesCount]);
    return (
        <div className="by-expandable-text">
            <div ref={collapsedTextRef} className="by-description-text" style={{maxHeight:maxHeight}} dangerouslySetInnerHTML={{__html:data}} >
            </div>
            {expandVisible && <Button text={collapsed ? "РАЗВЕРНУТЬ" : "СВЕРНУТЬ"} bordered={true} onClick={()=> setCollapsed(!collapsed)} />}
        </div>
    )
} 