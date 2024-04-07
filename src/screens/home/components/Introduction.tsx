import {Col, Image, Row} from 'antd';
import {self_photo} from '../../../assets';
import {Spacer, Typo} from '../../../components';
import colors from '../../../constants/colors';
import styles from '../styles';
//import ContactBlock from './ContactBlock';
import Contacts from './Contacts';
import {TypeAnimation} from 'react-type-animation';
const Introduction = () => {
    const txtIntroductionFirst = `Hey there, I'm Hoang Yen.`
    const txtIntroductionSecond = `I'm a QC Engineer.`
    const txtIntroductionThird = `Welcome to my portfolio.`
    const txtIntroductionFour = `Let's connect and explore how we can collaborate!`
    const txtContent = `Initially, I was a real non-tech, and my path to becoming a QC Engineer was quite unexpected. 
    However, I am extremely passionate about this role. I never imagined that I would remain dedicated to it for over 5 years.`
    const txtContent1 = `I've come to recognize that my meticulous attention to detail, fastidiousness, sense of responsibility, 
    and passion for continuous learning have been pivotal in propelling me forward on this journey.
    My pleasure to apply my knowledge to contribute to the success of the projects I worked on with the great teams.`
    const txtContact = `Feel free to contact me to discuss how these qualities can contribute to enhancing quality control processes within your organization. 
    I'm always eager to share insights, exchange ideas, and collaborate with others 
    who are passionate about maintaining high standards to build up quality products that have a positive impact on the community.`
    const highLightTxtContent = [
        ""
    ]
    const highLightTxtContact = [
        "",
    ]
    return <Row align="middle" justify='space-between'>
        <Col span={14} style={styles.boxInformation}>
            <TypeAnimation
                sequence={[
                    txtIntroductionFirst,
                    1500,
                    txtIntroductionSecond,
                    1500,
                    txtIntroductionThird,
                    1500,
                    txtIntroductionFour,
                    1500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{fontSize: 24, display: 'inline-block', fontFamily: 'RobotoRegular', fontWeight: 'bold'}}
            />
            <Spacer h={16} />
            {txtContent.split(' ').map(it => {
                if (highLightTxtContent.includes(it)) {
                    return <Typo bold txt={`${it} `} style={{...styles.txtMap, color: colors.highLight}} />
                }
                return <Typo txt={`${it} `} style={styles.txtMap} />
            })}
            <Spacer h={5} />
                        {txtContent1.split(' ').map(it => {
                if (highLightTxtContent.includes(it)) {
                    return <Typo bold txt={`${it} `} style={{...styles.txtMap, color: colors.highLight}} />
                }
                return <Typo txt={`${it} `} style={styles.txtMap} />
            })}
            <Spacer h={12} />
            {txtContact.split(' ').map(it => {
                if (highLightTxtContact.includes(it)) {
                    return <Typo bold txt={`${it} `} style={{...styles.txtMap, color: colors.highLight}} />
                }
                return <Typo txt={`${it} `} style={styles.txtMap} />
            })}
            <Spacer h={30} />
        <Contacts />
        </Col>
        <Col span={9}>
            <Image
                src={self_photo}
                style={{borderRadius: 12, border: '4px solid rgb(255, 244, 228)'}}
                preview={false}
            />
        </Col>
    </Row>
}
export default Introduction