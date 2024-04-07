import {Button, Image, Row} from "antd";
import {useEffect, useState} from "react";
import {logo_self} from '../../../assets';
import {Typo} from "../../../components";
import styles from '../styles';
const DEFINE_SCROLL_Y = {
    home: 340,
    skill: 600,
    experience: 2700,
    other: 3455,
    education: 3650,
    contact: 4000
}
const DEFINE_SCROLL_TO = {
    home: 0,
    skill: 500,
    experience: 1270,
    other: 3350,
    education: 3630,
    contact: 4000

}
const Header = () => {
    const [isFocusTab, setIsFocusTab] = useState<string>("Home")
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > DEFINE_SCROLL_Y.home && scrollPosition <= DEFINE_SCROLL_Y.skill) {
            setIsFocusTab("Skills")
        } else if (scrollPosition > DEFINE_SCROLL_Y.skill && scrollPosition <= DEFINE_SCROLL_Y.experience) {
            setIsFocusTab("Experience")
        } else if (scrollPosition > DEFINE_SCROLL_Y.experience && scrollPosition <= DEFINE_SCROLL_Y.other) {
            setIsFocusTab("Others")
        } else if (scrollPosition > DEFINE_SCROLL_Y.other && scrollPosition <= DEFINE_SCROLL_Y.education) {
            setIsFocusTab("Education")
        } else {
            setIsFocusTab("Home")
        }
    }

    const handleOnScroll = (value: number) => {
        window.scrollTo({behavior: 'smooth', top: value})
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <Row align="middle" justify='space-between' style={styles.rowHeader}>
        <Image
            src={logo_self}
            preview={false}
            style={styles.logo}
        />
        <Row>
            <Button type="text" onClick={() => handleOnScroll(0)} >
                <Typo fontSize={14} txt='Home' bold={isFocusTab === "Home"} />
            </Button>
            <Button type="text" onClick={() => handleOnScroll(DEFINE_SCROLL_TO.skill)} >
                <Typo fontSize={14} txt='My Skills' bold={isFocusTab === "Skills"} />
            </Button>
            <Button type="text" onClick={() => handleOnScroll(DEFINE_SCROLL_TO.experience)} >
                <Typo fontSize={14} txt='Experience' bold={isFocusTab === "Experience"} />
            </Button>
            {/* <Button type="text" onClick={() => handleOnScroll(DEFINE_SCROLL_TO.other)} >
                <Typo fontSize={14} txt='Other Projects' bold={isFocusTab === "Others"} />
            </Button> */}
            <Button type="text" onClick={() => handleOnScroll(DEFINE_SCROLL_TO.education)} >
                <Typo fontSize={14} txt='Education' bold={isFocusTab === "Education"} />
            </Button>
        </Row>
    </Row>
}
export default Header