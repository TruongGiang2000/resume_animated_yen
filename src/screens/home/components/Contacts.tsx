import {Col} from "antd"
import {Spacer, Typo} from "../../../components"
import styles from '../styles'
import ContactBlock from "./ContactBlock"
const Contacts = () => {
    return <Col style={styles.boxExperience}>
        <Spacer h={12} />
        <Typo txt="Address: " bold />
        <Typo txt="District 3, Ho Chi Minh City" />
        <Spacer />
        <Typo txt="Email: " bold />
        <Typo txt="truonggiang20001807@gmail.com" />
        <Spacer />
        <Typo txt="Phone: " bold />
        <Typo txt="(+84) 0814.598.168" />
        <Spacer h={8} />
        <ContactBlock />
    </Col>
}
export default Contacts