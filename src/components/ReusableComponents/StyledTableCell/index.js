import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

const StyledTableCell = withStyles(theme => ({
	head: {
	  color: "#666666",
	  padding: 17,
	  fontSize: 13
	},
	body: {
	  color: "#999999",
	  fontSize: 13,
	  padding: 7
	}
  }))(TableCell);

  export default StyledTableCell;