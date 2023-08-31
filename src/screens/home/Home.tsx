import {Col, Divider} from 'antd';
import {Spacer, Typo} from '../../components';
import Contacts from './components/Contacts';
import Education from './components/Education';
import Header from './components/Header';
import HistoryAlta from './components/HistoryAlta';
import HistoryNami from './components/HistoryNami';
import HistoryYouMed from './components/HistoryYoumed';
import Introduction from './components/Introduction';
import MySkills from './components/MySkills';
import OtherProjects from './components/OthersProject';
import styles from './styles';
const Home = () => {
    return (
        <Col>
            <Header />
            <Col style={styles.container}>
                <Spacer h={10} />
                <Introduction />
                <Spacer h={48} />
                <MySkills />
                <Spacer h={48} />
                <Divider style={styles.driver} orientation="center">
                    <Typo style={styles.txtTitle} fontSize={32} txt='EXPERIENCES' bold />
                </Divider>
                <HistoryNami />
                <Spacer h={16} />
                <HistoryYouMed />
                <Spacer h={16} />
                <HistoryAlta />
                <Spacer h={48} />
                <Divider style={styles.driver} orientation="center">
                    <Typo style={styles.txtTitle} fontSize={32} txt='OTHER PROJECTS' bold />
                </Divider>
                <OtherProjects />
                <Spacer h={48} />
                <Divider style={styles.driver} orientation="center">
                    <Typo style={styles.txtTitle} fontSize={32} txt='EDUCATION' bold />
                </Divider>
                <Education />
                <Spacer h={48} />
                <Divider style={styles.driver} orientation="center">
                    <Typo style={styles.txtTitle} fontSize={32} txt='CONTACTS' bold />
                </Divider>
                <Contacts />
            </Col>
        </Col>
    )
};
export default Home