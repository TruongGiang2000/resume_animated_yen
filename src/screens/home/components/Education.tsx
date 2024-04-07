import {Col} from "antd"
import {Spacer, Typo} from "../../../components"
import styles from '../styles'
const Education = () => {
    return <Col style={styles.boxExperience}>
        <Typo txt="Testing VN" bold fontSize={18} />
        <Spacer h={10} />
        <Typo txt="Course: " bold />
        <Typo txt="ISTQB (CTFL)" />
        <Spacer h={10} />
        <Typo txt="Apr, 2024 - Jun, 2024" />
        <Spacer h={20}/>
        <Typo txt="Testing VN" bold fontSize={18} />
        <Spacer h={10} />
        <Typo txt="Course: " bold />
        <Typo txt="Tester" />
        <Spacer h={10} />
        <Typo txt="Oct, 2020 - Dec, 2020" />
        <Spacer h={20}/>
        <Typo txt="Anh Sang Vocational Training Center" bold fontSize={18} />
        <Spacer h={10} />
        <Typo txt="Course: " bold />
        <Typo txt="General Accounting" />
        <Spacer h={10} />
        <Typo txt="May, 2014 - Jul, 2014" />
        <Spacer h={20}/>
        <Typo txt="Khanh Hoa Economic University" bold fontSize={18} />
        <Spacer h={10} />
        <Typo txt="Major: " bold />
        <Typo txt="Finance - Banking" />
        <Spacer h={10} />
        <Typo txt="Aug, 2010 - May, 2012" />
        <Spacer />
    </Col>
}
export default Education