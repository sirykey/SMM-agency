import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;
export const useSidebarStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

export const useHeaderStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    paddingRight: 24,
  },
  title: {
    flexGrow: 1,
  },
  root: {
    display: 'flex',
  },
}));
