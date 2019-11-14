
import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './Archive.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 725,
      height: 520,
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
  }),
);

const tileData = [
  {
    img: '/Outreach/ArduinoWksp-6.jpg',
    title: 'Arduino WorkSpace',
    featured: true,
  },
  {
    img: '/Outreach/ArduinoWksp-5.jpg',
    title: 'Arduino WorkSpace',
    featured: false,
  },  
  {
      img: '/Outreach/ArduinoWksp-2.jpg',
      title: 'Arduino WorkSpace',
      featured: false,
  },
{
  img: '/Outreach/ArduinoWksp-8.jpg',
  title: 'Arduino WorkSpace',
  featured: true,
},
{
  img: '/Outreach/BobsBash1-2.jpg',
  title: 'Bobs Bash',
  featured: true,
},
{
  img: '/Outreach/BobsBash1-1.jpg',
  title: 'Bobs Bash',
  featured: false,
},
{
  img: '/Outreach/DiscoveryPlace2.jpg',
  title: 'Discovery Place',
  featured: false,
},
{
  img: '/Outreach/DiscoveryPlace1.jpg',
  title: 'Discovery Place',
  featured: true,
},
{
  img: '/Outreach/Elementary2.jpg',
  title: 'Elementary',
  featured: true,
},
{
  img: '/Outreach/Elementary1.jpg',
  title: 'Elementary',
  featured: false,
},
{
  img: '/Outreach/NCScience2.jpg',
  title: 'NCScience',
  featured: false,
},
{
  img: '/Outreach/NCScience1.jpg',
  title: 'NCScience',
  featured: true,
},

    ];

export default function AdvancedGridList() {
    const classes = useStyles();
  
    return (
      <div className="sizeOfAlbum">
        <div className={classes.root}>
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
        </div>
      </div>
    );
  }