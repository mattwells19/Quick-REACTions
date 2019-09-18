import {withStyles} from "@material-ui/core";
import {Tooltip, Theme} from "@material-ui/core";

export default withStyles((theme: Theme) => ({
    tooltip: {
        fontSize: 15,
    },
}))(Tooltip);