import {Col} from "antd"
import {Spacer, Typo} from "../../../components"
import styles from '../styles'
import ContactBlock from "./ContactBlock"
const Contacts = () => {
    return <Col style={styles.boxExperience}>
        <ContactBlock />
        <Spacer h={12} />
        <Typo txt="Address: " bold />
        <Typo txt="Tan Binh District, Ho Chi Minh City" />
        <Spacer />
        <Typo txt="Email: " bold />
        <Typo txt="lehoangyennt24@gmail.com" />
        <Spacer />
        <Typo txt="Phone: " bold />
        <Typo txt="(+84) 905.369.164" />
        <Spacer h={8} />
    </Col>
}
export default Contacts