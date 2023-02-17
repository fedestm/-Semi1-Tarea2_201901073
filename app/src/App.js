import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { TableRow } from '@mui/material';
import React, {useRef, useState} from 'react';
import Webcam from 'react-webcam';

function createData(name, carnet) {
  return {name, carnet}
}

const rows = [
  createData('Federico David Zet Pajoc', 201901073)
];

function App() {

  const[isShowVideo, setIsShowVideo] = useState(false);
  const videoElemnt = useRef(null);

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: 'user'
  }

  const startCam = () => {
    setIsShowVideo(true);
  }

  const stopCam = () => {
    let stream = videoElemnt.current.stream;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    setIsShowVideo(false);
  }

  return (
    <div className="App">
      <div>
        <AppBar position='static' style={{background: '#2E3B55'}}>
          <Toolbar>
            <IconButton color='inherit' edge='start'>
              <DesktopWindowsIcon/>
            </IconButton>
            <Typography
              variant='h6'
              noWrap
              component='a'
              sx={{
                mr:2,
                display: {xs: 'none', md: 'flex'},
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              TAREA 2
            </Typography>
            <Button color='inherit' onClick={startCam}  style={{flexGrow:0.5}}
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              display: {xs: 'none', md: 'flex'},
              p: 0
            }}>
              Activar Camara
            </Button>
            <Button color='inherit' onClick={stopCam}
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              display: {xs: 'none', md: 'flex'},
              p: 0
            }}>
              Apagar Camara
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className='bloque'></div>
      <div className='camView'>
        {isShowVideo && 
        <Webcam audio={false} ref={videoElemnt} videoConstraints={videoConstraints} />
        }
      </div>
      <div className='table_container'>
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 650}} aria-label='simple table'>
            <TableHead sx={{"& th": {
        color: "white"
      }}}>
              <TableRow
                sx={{
                  background:'#2E3B55',
                }}
              >
                <TableCell>Carnet</TableCell>
                <TableCell>Nombre</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.carnet}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                <TableCell component='th' scope='row'>
                  {row.carnet}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default App;
