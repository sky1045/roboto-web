import React from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { 
    TableCell,
    TableRow,
} from '@material-ui/core';

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

const ArticleRow = (props) => {
    const { row } = props
    return (
        <StyledTableRow key={row.id}>
            <StyledTableCell component="th" scope="row">
                {row.id}
            </StyledTableCell>
            <StyledTableCell align="right">
              <Link to={"/article/" + row.id} style={{ textDecoration: 'none', color: 'inherit'}}>
                {row.title}
              </Link>
            </StyledTableCell>
            <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
            <StyledTableCell align="right">{row.updatedAt}</StyledTableCell>
        </StyledTableRow>
    )
}

export default ArticleRow