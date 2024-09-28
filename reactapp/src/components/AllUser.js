import { Button, DialogContent, Dialog, DialogTitle, styled, Table, TableBody, TableCell, TableHead, TableRow, Typography, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { allUser, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const StyledTable = styled(Table)`
  width: 100%;
  margin: 50px 0;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background-color: #000000;
    color: #ffffff;
  }
`;

const AllUser = () => {
  const [users, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await allUser();
    console.log(response);
    setUser(response.data);
  };

  const deleteUserData = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await deleteUser(id);
      getUserDetails();
    }
  };

  const handleVisibilityClick = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>

    <Grid container justifyContent="center">
      <Grid item xs={12} md={10} >
        <StyledTable>
          <TableHead>
            <THead>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Contact No.</TableCell>
              <TableCell>Actions</TableCell>
            </THead>
          </TableHead>
         
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.city}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button variant='contained' color="success" component={Link} to={`/edit/${user.id}`}>
                    <EditIcon />
                  </Button>
                  &nbsp;&nbsp;
                  <Button variant='contained' color='error' onClick={() => deleteUserData(user.id)}>
                    <DeleteIcon />
                  </Button>
                  &nbsp;&nbsp;
                  <Button variant='contained' onClick={() => handleVisibilityClick(user)}>
                    <VisibilityIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </StyledTable>
        <Dialog onClose={handleCloseDialog} open={openDialog}>
          <DialogTitle>User Details</DialogTitle>
          <DialogContent>
            {selectedUser && (
              <div>
                <Typography>Name: {selectedUser.username}</Typography>
                <Typography>Email: {selectedUser.email}</Typography>
                <Typography>City: {selectedUser.city}</Typography>
                <Typography>Contact No: {selectedUser.phone}</Typography>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </Grid>
   </Grid>
   </>
  );
}

export default AllUser;


























