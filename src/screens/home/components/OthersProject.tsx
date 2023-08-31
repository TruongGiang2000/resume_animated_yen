import {Col, Row} from "antd"
import {Spacer, Typo} from "../../../components"
import styles from '../styles'
const OtherProjects = () => {
    return <Row align={"top"} justify="start">
        <Col span={6} style={{...styles.boxExperience, height: '50vh'}}>
            <Col style={{textAlign: 'center'}}>
                <Typo txt="OES Inventory" bold fontSize={18} />
                <Spacer />
                <Typo txt="(Freelancer Job)" />
            </Col>
            <Spacer h={12} />
            <Typo txt="Time: " bold />
            <Typo txt="March 2022 - Present" />
            <Spacer />
            <Typo txt="Team size: " bold />
            <Typo txt="+5" />
            <Spacer />
            <Typo txt="Description: " bold />
            <Typo txt="OES is a comprehensive application that empowers users to efficiently manage their pharmacy businesses. With scanning, QR code generation, advanced search, and medication management, it offers a holistic solution for pharmacy efficiency." />
            <Spacer />
            <Typo txt="Responsibility: " bold />
            <Spacer />
            <Typo txt="• Implement feature by requirement." />
        </Col>
        <Spacer w={32} />
        <Col span={6} style={{...styles.boxExperience, height: '50vh'}}>
            <Col style={{textAlign: 'center'}}>
                <Typo txt="Stravel" bold fontSize={18} />
                <Spacer />
                <Typo txt="(My Project)" />
            </Col>
            <Spacer h={12} />
            <Typo txt="Time: " bold />
            <Typo txt="March 2020 - January 2021" />
            <Spacer />
            <Typo txt="Team size: " bold />
            <Typo txt="+5" />
            <Spacer />
            <Typo txt="Description: " bold />
            <Typo txt="Stravel is a powerful app designed to enrich travel experiences. With diverse functions, it empowers users to explore destinations, book accommodations, preview spots, and navigate using integrated maps." />
            <Spacer />
            <Typo txt="Responsibility: " bold />
            <Spacer />
            <Typo txt="• Nodejs development proficiency." />
            <Spacer />
            <Typo txt="• Implement features." />
            <Spacer />
            <Typo txt="• Map integration." />
        </Col>
    </Row>
}
export default OtherProjects