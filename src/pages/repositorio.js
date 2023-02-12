// material-ui
//import { Typography } from '@mui/material';

//import { Box } from '@mui/system';
//import { useState } from 'react';

// project import
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArticleIcon from '@mui/icons-material/Article';
import TreeItem from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

//Icon
import DownloadIcon from '@mui/icons-material/Download';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const storage = getStorage();
//import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const RepositorioPage = () => {
  const [dataes_2021, setDataes_2021] = useState([{ id: 'root', nombre: 'Cargando' }]);
  const [dataes_2022, setDataes_2022] = useState([{ id: 'root', nombre: 'Cargando' }]);

  const [dataem_2022, setDataem_2022] = useState([{ id: 'root', nombre: 'Cargando' }]); //ESTADISTICOS MENSUALES
  const [dataos_2020, setDataos_2020] = useState([{ id: 'root', nombre: 'Cargando' }]);
  const [dataos_2021, setDataos_2021] = useState([{ id: 'root', nombre: 'Cargando' }]);
  const [dataos_2022, setDataos_2022] = useState([{ id: 'root', nombre: 'Cargando' }]);
  const [dataps, setDataps] = useState([{ id: 'root', nombre: 'Cargando' }]);
  const [databw, setDatabw] = useState([{ id: 'root', nombre: 'Cargando' }]);
  const [datarc_2022, setDatarc_2022] = useState([{ id: 'root', nombre: 'Cargando' }]);
  const [datarc_ru, setDatarc_ru] = useState([{ id: 'root', nombre: 'Cargando' }]);
  const [dataanuarios, setDataanuarios] = useState([{ id: 'root', nombre: 'Cargando' }]);

  //Loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const create_list = (listRef, count, flag) => {
      listAll(listRef)
        .then((res) => {
          var list = [];
          res.items.forEach((itemRef) => {
            var itemRefname = {
              id: count,
              nombre: itemRef.name,
              ref: itemRef
            };
            list.push(itemRefname);
            count++;
          });

          if (flag == 1) {
            setDataes_2021(list.sort());
          }
          if (flag == 2) {
            setDataes_2022(list.sort((a, b) => (a.nombre > b.nombre ? 1 : -1)));
          }
          if (flag == 3) {
            setDataem_2022(list);
          }
          if (flag == 4) {
            setDataos_2020(list);
          }
          if (flag == 5) {
            setDataos_2021(list);
          }
          if (flag == 6) {
            setDataos_2022(list);
          }
          if (flag == 7) {
            setDataps(list);
          }
          if (flag == 8) {
            setDatabw(list);
          }
          if (flag == 9) {
            setDatarc_2022(list);
          }
          if (flag == 10) {
            setDatarc_ru(list);
          }
          if (flag == 11) {
            setDataanuarios(list);
          }
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
          console.log(error);
        });
    };
    const listRef_es_2021 = ref(storage, 'gs://aebe-ea435.appspot.com/1. ESTADISTICOS SEMANALES/2021');
    const listRef_es_2022 = ref(storage, 'gs://aebe-ea435.appspot.com/1. ESTADISTICOS SEMANALES/2022');
    const listRef_em_2022 = ref(storage, 'gs://aebe-ea435.appspot.com/2.ESTADISTICOS MENSUALES/2022');
    const listRef_os_2020 = ref(storage, 'gs://aebe-ea435.appspot.com/3. OBSERVACIONES SEMANALES/2020');
    const listRef_os_2021 = ref(storage, 'gs://aebe-ea435.appspot.com/3. OBSERVACIONES SEMANALES/2021');
    const listRef_os_2022 = ref(storage, 'gs://aebe-ea435.appspot.com/3. OBSERVACIONES SEMANALES/2022');
    const listRef_ps = ref(storage, 'gs://aebe-ea435.appspot.com/4. PRODUCCIÓN SEMANAL');
    const listRef_bw = ref(storage, 'gs://aebe-ea435.appspot.com/5. BANANA WEEKLY MARKET SENSE/2022');

    const listRef_rc_2022 = ref(storage, 'gs://aebe-ea435.appspot.com/6. REPORTES DE COYUNTURA/2022');
    const listRef_rc_ru = ref(storage, 'gs://aebe-ea435.appspot.com/6. REPORTES DE COYUNTURA/2022/RUSIA - UCRANIA');
    const listRef_anuarios = ref(storage, 'gs://aebe-ea435.appspot.com/7. ANUARIOS');

    var count = 1;
    create_list(listRef_es_2021, count, 1);
    create_list(listRef_es_2022, count, 2);
    create_list(listRef_em_2022, count, 3);
    create_list(listRef_os_2020, count, 4);
    create_list(listRef_os_2021, count, 5);
    create_list(listRef_os_2022, count, 6);
    create_list(listRef_ps, count, 7);
    create_list(listRef_bw, count, 8);
    create_list(listRef_rc_2022, count, 9);
    create_list(listRef_rc_ru, count, 10);
    create_list(listRef_anuarios, count, 11);
  }, []);

  const renderTree = (list) =>
    list.map((nodes) => (
      <Grid key={nodes.id} item sm={6} xs={12} md={4} lg={2}>
        <Paper elevation={3} sx={{ p: 1, m: 1, position: 'relative' }}>
          <Box sx={{ m: 1 }} display="flex" justifyContent="center" alignItems="center">
            <Typography>{nodes.nombre}</Typography>
          </Box>
          <Box sx={{ fontWeight: 'inherit', zIndex: 3 }}>
            <Box sx={{ m: 1 }} display="flex" justifyContent="center" alignItems="center">
              <ArticleIcon fontSize="large" />
            </Box>
            <Box sx={{ m: 1 }} display="flex" justifyContent="center" alignItems="center">
              <Button
                variant="contained"
                endIcon={<DownloadIcon />}
                color="primary"
                onClick={() =>
                  setLoading(true) ||
                  getDownloadURL(nodes.ref)
                    .then((url) => {
                      request(url, nodes).then(() => setLoading(false));
                    })
                    .catch((error) => {
                      console.log(error);
                      // Handle any errors
                    })
                }
              >
                Descargar
              </Button>
            </Box>
            <Box sx={{ m: 1 }} display="flex" justifyContent="center" alignItems="center">
              <Button
                variant="contained"
                endIcon={<RemoveRedEyeIcon />}
                color="primary"
                onClick={() =>
                  setLoading(true) ||
                  getDownloadURL(nodes.ref)
                    .then((url) => {
                      window.open(url, '_blank');
                      setLoading(false);
                    })
                    .catch((error) => {
                      console.log(error);
                      // Handle any errors
                    })
                }
              >
                Visualizar
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    ));

  const request = (url, nodes) => {
    return new Promise(function () {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';

      xhr.onload = (event) => {
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = nodes.nombre;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        const blob = xhr.response;
        console.log(blob);
        console.log(event);
      };
      xhr.open('GET', url);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            setLoading(false);
          } else {
            console.log('error');
          }
        }
      };
      xhr.ontimeout = function () {
        alert('Error: El servidor no responde');
      };
    });
  };

  return (
    <Box
      sx={{
        display: 'block',
        width: '100%',
        height: '85%',
        zIndex: 3
      }}
    >
      <Paper elevation={3}>
        {loading ? <LinearProgress /> : <div />}
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ overflowY: 'auto' }}
        >
          {/*Estadistico Semanal*/}
          <TreeItem nodeId="1" label={<Typography variant="h5"> Estadistico Semanal</Typography>}>
            <TreeItem nodeId="2" label={<Typography variant="h6"> 2021</Typography>}>
              <Grid container spacing={2}>
                {renderTree(dataes_2021)}
              </Grid>
            </TreeItem>
            <TreeItem nodeId="51" label={<Typography variant="h6"> 2022</Typography>}>
              <Grid container spacing={2}>
                {renderTree(dataes_2022)}
              </Grid>
            </TreeItem>
          </TreeItem>
          {/*Estadistico Mensual*/}
          <TreeItem nodeId="3" label={<Typography variant="h5"> Estadistico Mensual</Typography>}>
            <TreeItem nodeId="52" label={<Typography variant="h6"> 2022</Typography>}>
              <Grid container spacing={2}>
                {renderTree(dataem_2022)}
              </Grid>
            </TreeItem>
          </TreeItem>
          {/*Observaciones Semanal*/}
          <TreeItem nodeId="4" label={<Typography variant="h5"> Observaciones Semanal</Typography>}>
            <TreeItem nodeId="53" label={<Typography variant="h6"> 2020</Typography>}>
              <Grid container spacing={2}>
                {renderTree(dataos_2020)}
              </Grid>
            </TreeItem>
            <TreeItem nodeId="54" label={<Typography variant="h6"> 2021</Typography>}>
              <Grid container spacing={2}>
                {renderTree(dataos_2021)}
              </Grid>
            </TreeItem>
            <TreeItem nodeId="55" label={<Typography variant="h6"> 2022</Typography>}>
              <Grid container spacing={2}>
                {renderTree(dataos_2022)}
              </Grid>
            </TreeItem>
          </TreeItem>
          {/*Produccion Semanal*/}
          <TreeItem nodeId="5" label={<Typography variant="h5"> Produccion Semanal</Typography>}>
            <Grid container spacing={2}>
              {renderTree(dataps)}
            </Grid>
          </TreeItem>
          {/*Banana Weekly Market Sense*/}
          <TreeItem nodeId="6" label={<Typography variant="h5"> Banana Weekly Market Sense</Typography>}>
            <TreeItem nodeId="56" label={<Typography variant="h6"> 2022</Typography>}>
              <Grid container spacing={2}>
                {renderTree(databw)}
              </Grid>
            </TreeItem>
          </TreeItem>
          {/*Reportes de Coyuntura*/}
          <TreeItem nodeId="7" label={<Typography variant="h5"> Reportes de Coyuntura</Typography>}>
            <TreeItem nodeId="57" label={<Typography variant="h6"> 2022</Typography>}>
              <Grid container spacing={2}>
                {renderTree(datarc_2022)}
              </Grid>
            </TreeItem>
            <TreeItem nodeId="58" label={<Typography variant="h6"> Rusia - Ucrania</Typography>}>
              <Grid container spacing={2}>
                {renderTree(datarc_ru)}
              </Grid>
            </TreeItem>
          </TreeItem>
          {/*Anuarios*/}
          <TreeItem nodeId="8" label={<Typography variant="h5"> Anuarios</Typography>}>
            <Grid container spacing={2}>
              {renderTree(dataanuarios)}
            </Grid>
          </TreeItem>
        </TreeView>
      </Paper>
    </Box>
  );
};

export default RepositorioPage;
