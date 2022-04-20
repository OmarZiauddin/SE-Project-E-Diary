import * as React from "react"
import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

function createData(name, calories, fat, carbs, protein, test) {
  return { name, calories, fat, carbs, protein, test }
}

const rows = [
  createData("08:00", "English", "Math", "Urdu", "Science", "English"),
  createData("09:00", "English", "Math", "Urdu", "Science", "English"),
  createData("10:00", "English", "Math", "Urdu", "Science", "English"),
  createData("11:00", "English", "Math", "Urdu", "Science", "English"),
]

export default function TimeTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{""}</StyledTableCell>
            <StyledTableCell align="right">Monday</StyledTableCell>
            <StyledTableCell align="right">Tuesday</StyledTableCell>
            <StyledTableCell align="right">Wednesday</StyledTableCell>
            <StyledTableCell align="right">Thursday</StyledTableCell>
            <StyledTableCell align="right">Friday</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell
                onClick={() => console.log("here changing")}
                align="right"
              >
                {row.calories}
              </StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.test}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
