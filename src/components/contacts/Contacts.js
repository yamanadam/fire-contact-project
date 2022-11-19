import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { useFetch, handleDelete, upDataUser } from "../utils/functions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Contacts = ({ showInfo }) => {
  const { loading, list } = useFetch();
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {loading ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  Loading
                </TableCell>
              </TableRow>
            ) : list?.lenght === 0 ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  No Result Found
                </TableCell>
              </TableRow>
            ) : (
              list?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{item.name} </TableCell>
                  <TableCell align="center">{item.phone} </TableCell>
                  <TableCell align="center">{item.gender} </TableCell>
                  <TableCell align="center">
                    <DeleteIcon onClick={() => handleDelete(item.id)} />
                  </TableCell>
                  <TableCell align="center">
                    <EditIcon
                      onClick={() =>
                        showInfo(item.id, item.name, item.phone, item.gender)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
