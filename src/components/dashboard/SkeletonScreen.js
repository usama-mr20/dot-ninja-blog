import React from "react";

import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

function SkeletonScreen() {
  return (
    <div style={{ marginBottom: "60px", maxWidth: "80%" }}>
      <Typography variant="h3">
        <Skeleton />
      </Typography>
      <Typography variant="body1">
        <Skeleton />
      </Typography>
      <Skeleton variant="text" />
      <Typography variant="caption">
        <Skeleton />
      </Typography>
    </div>
  );
}

export default SkeletonScreen;
