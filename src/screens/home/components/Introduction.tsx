import {Col, Image, Row} from 'antd';
import {self_photo} from '../../../assets';
import {Spacer, Typo} from '../../../components';
import colors from '../../../constants/colors';
import styles from '../styles';
import ContactBlock from './ContactBlock';
import {TypeAnimation} from 'react-type-animation';
const Introduction = () => {
    const txtIntroductionFirst = `Hey there, I'm Giang.`
    const txtIntroductionSecond = `I'm a React Native developer.`
    const txtIntroductionThird = `I have more 3 years of experience.`
    const txtIntroductionFour = `Let's connect and explore how we can collaborate!`
    const txtContent = `Over the years, I've collaborated with diverse teams to bring innovative solutions to life,
	 from concept to deployment. I've gained expertise in integrating third-party libraries, API integrations, 
	 and crafting custom animations to elevate the user engagement within the apps.
	 My obsession with clean code and maintainable solutions ensures that my projects
	 are not only functional but also scalable for future iterations.`
    const txtContact = `Feel free to connect with me to discuss all things React Native,
	mobile development, or to simply share tech stories. Let's create exceptional mobile experiences together. 
	I'm ready to bring my 3+ years of expertise to your team and contribute to building exceptional apps that make a real impact.`
    const highLightTxtContent = [
        "integrating",
        "third-party",
        "clean",
        "code",
        "crafting",
        "custom",
        "animations",
        "maintainable",
        "solutions",
        "innovative"
    ]
    const highLightTxtContact = [
        "create",
        "exceptional",
        "mobile",
        "real",
        "impact",
        "3+",
        "years",
        "of",
        "expertise",
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
            <Spacer h={12} />
            {txtContact.split(' ').map(it => {
                if (highLightTxtContact.includes(it)) {
                    return <Typo bold txt={`${it} `} style={{...styles.txtMap, color: colors.highLight}} />
                }
                return <Typo txt={`${it} `} style={styles.txtMap} />
            })}
            <Spacer h={72} />
            <ContactBlock />
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