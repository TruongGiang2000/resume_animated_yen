import {Button, Col, Image, Row} from "antd"
import {apple_store, ch_play} from "../../../assets"
import {Spacer, Typo} from "../../../components"
import {onLink} from "../../../utils"
import styles from '../styles'
import {DESCRIPTION_TDA, RESPONSIBILITY_TDA} from "./constants"
const HistoryTDA = () => {
    return <Col style={styles.boxExperience}>
        <Row align="middle" justify="start">
            <Col span={8}>
                <Typo fontSize={20} txt="TDA Solution" bold />
                <Spacer />
                <Typo txt="Business Analyst and Consultant" fontSize={12} />
            </Col>
            <Typo fontSize={16} txt="Oct, 2015 - Jan, 2021" />
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
            <Typo txt="ERP (Enterprise Resource Planning)" />
        </Row>
        <Spacer h={8} />
        <Row align="top" justify="start">
            <Col span={8}>
                <Typo fontSize={16} txt="Project:" bold />
            </Col>
            <Col span={16}>
                <Typo txt="DiHotel: Hotel Management System" bold />
                <Spacer />
                <Typo txt="Description: " bold />
                <Typo txt={DESCRIPTION_TDA} />
                <Spacer />
            </Col>
        </Row>
        <Spacer h={8} />
        <Row align="top" justify="start">
            <Col span={8}>
                <Typo fontSize={16} style={{width: '30%'}} txt="Responsibility:" bold />
            </Col>
            <Col span={16}>
                {RESPONSIBILITY_TDA.map((it, index) => {
                    return <>
                        <Typo txt={it} />
                        {index !== RESPONSIBILITY_TDA.length - 1 && <Spacer h={4} />}
                    </>
                })}

            </Col>
        </Row>
        <Spacer h={8} />
        <Row align="top" justify="start">
            <Col span={8}>
                <Typo fontSize={16} style={{width: '30%'}} txt="Honors & Awards:" bold />
            </Col>
            <Col span={16}>
            <Typo txt="Employee of The Year Award (2017-2020)" />
            </Col>
        </Row>
    </Col>
}
export default HistoryTDA