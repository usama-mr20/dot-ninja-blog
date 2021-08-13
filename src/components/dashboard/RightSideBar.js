import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const RightSideBar = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>About Developer</Typography>
          <Typography className={classes.secondaryHeading}>
            Hey Ninjas! Welcome here
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A very simple yet powerful blog made in React JS, Redux and
            Firebase. <br />
            Try make a new blog post and see the magic.
            <br />
            <br />
            Drop your suggestions at: <br />
            {
              <EmailIcon
                fontSize="small"
                style={{ marginBottom: "-6px", marginRight: "3px" }}
              />
            }
            <a href="mailto:usamaadev@gmail.com">usamaadev@gmail.com</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RightSideBar;
