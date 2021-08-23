import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
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
  getPageInfo,
} from './ArticleSlice'
import ArticleRow from './ArticleRow'
import Paging from '../../components/Paging'

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
    const dispatch = useDispatch()
    const classes = useStyles()
    const rows = useSelector(selectArticles)
    const { page, count } = useSelector(getPageInfo)

    const setPage = (page) => {
      dispatch(fetchArticles(page))
    }

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
          <Paging page={page} count={count} setPage={setPage}/>
        </div>
      )
  }

  export default ArticleList