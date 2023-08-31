import {Col} from "antd"
import {Spacer, Typo} from "../../../components"
import styles from '../styles'
const Education = () => {
    return <Col style={styles.boxExperience}>
        <Typo txt="FPT Polytechnic Ho Chi Minh" bold fontSize={18} />
        <Spacer h={12} />
        <Typo txt="Major: " bold />
        <Typo txt="Mobile Development" />
        <Spacer />
        <Typo txt="GPA: " bold />
        <Typo txt="3.2/4.0" />
        <Spacer />
        <Typo txt="Honors: " bold />
        <Typo txt="Graduated with distinction." />
    </Col>
}
export default Education