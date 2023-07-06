import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, Stack, Typography, Badge } from "@mui/material";
import { List, ListItem, ListItemText, styled } from "@mui/material";

const CircleListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  "&::before": {
    flexShrink: 0,
    counterIncrement: "step",
    content: "counter(step)",
    marginRight: theme.spacing(2),
    marginTop: "7px",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const OverviewTopQueries = (props) => {
  const { value, sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Top queries" sx={{ textAlign: "center" }} />
      <CardContent>
        <List>
          {value.map((item, index) => {
            return (
              <CircleListItem key={index}>
                <ListItemText primary={item} primaryTypographyProps={{ variant: "overline" }} sx={{mt:0}} />
              </CircleListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

OverviewTopQueries.propTypes = {
  value: PropTypes.string,
  sx: PropTypes.object,
};
