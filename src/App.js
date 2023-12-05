import './App.module.scss';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from './App.module.scss';
import Table from './components/Table/index';
import UpperWrap from "./components/UpperWrap";
import MainAppBar from "./components/AppBar";


function App() {
  return (
    <div>
      <Container fixed>
        <Box className={styles.upperWrapBox}>
          <UpperWrap/>
          <MainAppBar/>
          <Box className={styles.tableWrap}>
            <Table/>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;


