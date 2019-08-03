import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

const StyledTableCell = withStyles(theme => ({
	head: {
		color: "#666666",
		padding: 17,
		fontSize: 13,
		borderBottom: "1px solid #f5f5f5"
	},
	body: {
		color: "#999999",
		fontSize: 13,
		fontWeight: "inherit",
		padding: 7,
		borderBottom: "1px solid #f5f5f5"
	}
  }))(TableCell);

export const StyledTableCellWithoutBorder = withStyles(theme => ({
	root: {
		border: "none",
		borderBottom: "1px solid #f5f5f5",
		padding: 0,
		"&:last-child": {
			padding: 0
		}
	}
}))(TableCell);

export const StyledTableCellWithoutPadding = withStyles(theme => ({
	head: {
		padding: 8,
		borderBottom: "1px solid #f5f5f5"
	},
	body : {
		color: "#666666",
		padding: 17,
		fontSize: 13,
		borderBottom: "1px solid #f5f5f5"
	}
}))(TableCell);

  export default StyledTableCell;