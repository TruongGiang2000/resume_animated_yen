import {Button, Col, Image, Row} from "antd"
import {apple_store, ch_play} from "../../../assets"
import {Spacer, Typo} from "../../../components"
import {onLink} from "../../../utils"
import styles from '../styles'
import {DESCRIPTION_YOUMED, LINK_IN_WEB, RESPONSIBILITY_YOUMED} from "./constants"
const HistoryYouMed = () => {
    return <Col style={styles.boxExperience}>
        <Row align="middle" justify="start">
            <Col span={8}>
                <Typo fontSize={20} txt="Youmed" bold />
                <Spacer />
                <Typo txt="Mobile Developer" fontSize={12} />
            </Col>
            <Typo fontSize={16} txt="August 2021 - January 2023" />
        </Row>
        <Spacer h={16} />
        <Row align="middle" justify="start">
            <Col span={8}>
                <Typo fontSize={16} txt="Type Company:" bold />
            </Col>
            <Typo txt="Product" />
        </Row>
        <Row align="middle" justify="start">
            <Col span={8}>
                <Typo fontSize={16} txt="Domain:" bold />
            </Col>
            <Typo txt="Medical" />
        </Row>
        <Row align="middle" justify="start">
            <Col span={8}>
                <Typo fontSize={16} txt="Team Size:" bold />
            </Col>
            <Typo txt="3+" />
        </Row>
        <Spacer h={8} />
        <Row align="top" justify="start">
            <Col span={8}>
                <Typo fontSize={16} txt="Project:" bold />
            </Col>
            <Col span={16}>
                <Typo txt="Youmed" bold />
                <Spacer />
                <Typo txt="Description: " bold />
                <Typo txt={DESCRIPTION_YOUMED} />
                <Spacer />
                <Typo txt="Website: " bold />
                <Button type="link" style={styles.paddingNone} onClick={() => onLink(LINK_IN_WEB.webYouMed)}>
                    <Typo style={styles.txtLink} txt={LINK_IN_WEB.webYouMed} />
                </Button>
                <Spacer h={8} />
                <Button type="link" style={styles.paddingNone} onClick={() => onLink(LINK_IN_WEB.androidYouMed)}>
                    <Image preview={false} src={ch_play} style={{...styles.iconStore, marginRight: 16}} />
                </Button>
                <Button type="link" style={styles.paddingNone} onClick={() => onLink(LINK_IN_WEB.iosYouMed)}>
                    <Image preview={false} src={apple_store} style={styles.iconStore} />
                </Button>
            </Col>
        </Row>
        <Spacer h={8} />
        <Row align="top" justify="start">
            <Col span={8}>
                <Typo fontSize={16} style={{width: '30%'}} txt="Responsibility:" bold />
            </Col>
            <Col span={16}>
                {RESPONSIBILITY_YOUMED.map((it, index) => {
                    return <>
                        <Typo txt={it} />
                        {index !== RESPONSIBILITY_YOUMED.length - 1 && <Spacer h={4} />}
                    </>
                })}

            </Col>
        </Row>
    </Col>
}
export default HistoryYouMed