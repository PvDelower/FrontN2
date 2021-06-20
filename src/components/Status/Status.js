import React from "react";
import Grid from "@material-ui/core/Grid";

const Status = ({ message }) => {
  return (
    <Grid justify="center" container>
      <div style={{marginTop: '10px'}}>{message}</div>
    </Grid>
  )
}

export default Status