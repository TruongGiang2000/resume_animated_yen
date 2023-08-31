import {Button, Col, Image, Row} from "antd"
import {apple_store, ch_play} from "../../../assets"
import {Spacer, Typo} from "../../../components"
import {onLink} from "../../../utils"
import styles from '../styles'
import {DESCRIPTION_HD_BANK, DESCRIPTION_POD_HEALTH, DESCRIPTION_VIETJET, LINK_IN_WEB, RESPONSIBILITY_HD_BANK, RESPONSIBILITY_POD_HEALTH, RESPONSIBILITY_VETJET} from "./constants"
const HistoryAlta = () => {
    return <Col style={styles.boxExperience}>
        <Row align="middle" justify="start">
            <Col span={8}>
                <Typo fontSize={20} txt="Alta Media" bold />
                <Spacer />
                <Typo txt="Mobile Developer" fontSize={12} />
            </Col>
            <Typo fontSize={16} txt="July 2020 - August 2021" />
        </Row>
        <Spacer h={16} />
        <Row align="middle" justify="start">
            <Col span={8}>
                <Typo fontSize={16} txt="Type Company:" bold />
            </Col>
            <Typo txt="Outsource" />
        </Row>
        <Row align="middle" justify="start">
            <Col span={8}>
                <Typo fontSize={16} txt="Domain:" bold />
            </Col>
            <Typo txt="Banking - Booking - IOT" />
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
                <Typo txt="1. Vietjet Air" bold />
                <Spacer />
                <Typo txt="Description: " bold />
                <Typo txt={DESCRIPTION_VIETJET} />
                <Spacer />
                <Typo txt="Responsibility: " bold />
                <Spacer />
                {RESPONSIBILITY_VETJET.map((it, index) => {
                    return <>
                        <Typo txt={it} />
                        {index !== RESPONSIBILITY_VETJET.length - 1 && <Spacer h={4} />}
                    </>
                })}
                <Spacer />
                <Typo txt="Website: " bold />
                <Button type="link" style={styles.paddingNone} onClick={() => onLink(LINK_IN_WEB.webVietjet)}>
                    <Typo style={styles.txtLink} txt={LINK_IN_WEB.webVietjet} />
                </Button>
                <Spacer h={8} />
                <Button type="link" style={styles.paddingNone} onClick={() => onLink(LINK_IN_WEB.androidVejet)}>
                    <Image preview={false} src={ch_play} style={{...styles.iconStore, marginRight: 16}} />
                </Button>
                <Button type="link" style={styles.paddingNone} onClick={() => onLink(LINK_IN_WEB.iosVietjet)}>
                    <Image preview={false} src={apple_store} style={styles.iconStore} />
                </Button>
                <Spacer h={16} />
                <Typo txt="2. HD Bank" bold />
                <Spacer />
                <Typo txt="Description: " bold />
                <Typo txt={DESCRIPTION_HD_BANK} />
                <Spacer />
                <Typo txt="Responsibility: " bold />
                <Spacer />
                {RESPONSIBILITY_HD_BANK.map((it, index) => {
                    return <>
                        <Typo txt={it} />
                        {index !== RESPONSIBILITY_HD_BANK.length - 1 && <Spacer h={4} />}
                    </>
                })}
                <Spacer h={8} />
                <Typo txt="3. POD Health" bold />
                <Spacer />
                <Typo txt="Description: " bold />
                <Typo txt={DESCRIPTION_POD_HEALTH} />
                <Spacer />
                <Typo txt="Responsibility: " bold />
                <Spacer />
                {RESPONSIBILITY_POD_HEALTH.map((it, index) => {
                    return <>
                        <Typo txt={it} />
                        {index !== RESPONSIBILITY_POD_HEALTH.length - 1 && <Spacer h={4} />}
                    </>
                })}
            </Col>
        </Row>
    </Col>
}
export default HistoryAlta