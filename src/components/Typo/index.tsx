import {Typography} from 'antd'
import React from 'react'
interface TypoProps {
    txt: string,
    bold?: boolean,
    fontSize?: number,
    style?: React.CSSProperties
    onClick?: () => void
}
const Typo = ({txt = '', bold = false, fontSize = 14, style = {}, onClick}: TypoProps) => {
    const styleTxt: React.CSSProperties = {
        fontSize,
        fontFamily: 'RobotoRegular',
        ...style
    }
    return (
        <Typography.Text onClick={onClick} style={styleTxt} strong={bold}>{txt}</Typography.Text>
    )
}
export default Typo