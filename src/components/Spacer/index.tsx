interface SpacerProps {
    w?: number
    h?: number
}
const Spacer = ({w = 0, h = 0}: SpacerProps) => {
    return <div style={{width: w, height: h}} />
}
export default Spacer