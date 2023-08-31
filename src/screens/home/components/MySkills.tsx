import {Col, Divider, Row} from "antd";
import Lottie from 'lottie-react';
import {Spacer, Typo} from "../../../components";
import styles from '../styles';
import {DATA_ROW_FIRST, DATA_ROW_SECOND} from './constants';
const MySkills = () => {
    return <>
        <Divider style={styles.driver} orientation="center"><Typo style={styles.txtTitle} fontSize={32} txt='MY SKILLS' bold /></Divider>
        <Row align="middle" justify="space-between">
            {DATA_ROW_FIRST?.map((it, index) => {
                return <Col key={`${index}`} span={6} style={styles.pRightBlock}>
                    <Col style={styles.colInfo}>
                        <Lottie style={styles.lottie} animationData={it?.lottie} loop={true} />
                        <Typo bold fontSize={16} txt={it.title} style={styles.txtTitleBlock} />
                        <Spacer h={8} />
                        {it.content.map((itContent, index) => <>
                            <Typo txt={itContent} />
                            {index !== it?.content?.length - 1 && <Spacer h={4} />}
                        </>)}
                    </Col>
                </Col>
            })}
        </Row>
        <Spacer h={16} />
        <Row align="middle" justify="center">
            {DATA_ROW_SECOND?.map((it, index) => {
                return <Col key={`${index}`} span={6} style={styles.pRightBlock}>
                    <Col style={styles.colInfo}>
                        <Lottie style={styles.lottie} animationData={it?.lottie} loop={true} />
                        <Typo bold fontSize={16} txt={it.title} style={styles.txtTitleBlock} />
                        <Spacer h={8} />
                        {it.content.map((itContent, index) => <>
                            <Typo style={!itContent ? {opacity: 0} : {}} txt={itContent || `${index}`} />
                            {index !== it?.content?.length - 1 && <Spacer h={4} />}
                        </>)}
                    </Col>
                </Col>
            })}
        </Row>
    </>
}
export default MySkills