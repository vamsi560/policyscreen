
import React from 'react';
import { Box, Button, Checkbox, Select, TextField } from '@mui/material';

const PolicyScreen = () => (
  <Box sx={ padding: '20px' }>
    <TextField label="Path ID" name="pathId" variant="outlined" required=true fullWidth=true placeholder="Enter Path ID" />
    <Select label="Billing Option" name="billingOption" variant="outlined" fullWidth=true required=true options=[] />
    <Checkbox name="autoRenew" color="primary" /> Auto Renew
    <TextField label="Insured Name" name="insuredName" variant="outlined" fullWidth=true required=true />
    <TextField label="Agent Code" name="agentCode" variant="outlined" fullWidth=true />
    <Button color="primary" onClick={() => { /* navigate */ }}>Next</Button>
    <Button color="success" onClick={() => { /* submit */ }}>OK</Button>
    <Button color="error" onClick={() => { /* reset */ }}>Cancel</Button>
  </Box>
);

export default PolicyScreen;
