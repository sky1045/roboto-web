import React from 'react'
import { useSelector } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid'
import DarkTheme from '../../themes/DarkTheme';
import { 
  withStyles,
  makeStyles,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@material-ui/core';
import { store } from '../../app/store';
import {
  fetchArticles,
  selectArticles,
} from './ArticleSlice'
import ArticleRow from './ArticleRow'

store.dispatch(fetchArticles())

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  }
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


  const useStyles = makeStyles((theme) => ({
    item: {
      color: "black",
    },
    table: {
      minWidth: 700,
    },
    spacer: theme.mixins.toolbar,
  }))

  const ArticleList = () => {
    const classes = useStyles()
    const rows = useSelector(selectArticles)
      return (
        <div style={{  width: '100%' }}>
          <Typography variant="h3" gutterBottom>
            Article List
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>id</StyledTableCell>
                  <StyledTableCell align="right">title</StyledTableCell>
                  <StyledTableCell align="right">created_at</StyledTableCell>
                  <StyledTableCell align="right">updated_at</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <ArticleRow row={row} key={row.id} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )
  }

  export default ArticleList