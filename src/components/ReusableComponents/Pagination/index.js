import React, { Component } from "react";
import {
    withStyles,
    Typography,
    IconButton,
} from "@material-ui/core";
import arrowBack from '../../../icons/arrow_back.svg';
import arrowForward from '../../../icons/arrow_forward.svg'

const useStyles = theme => ({
	count: {
		color: '#999999',
		fontSize: 13
	}
});

class Pagination extends Component {
	onPrevious = (event) => {
		const { onChangePage, page } = this.props;
		onChangePage(event, page - 1);
	}

	onNext = (event) => {
		const { onChangePage, page } = this.props;
		onChangePage(event, page + 1);
	}

	render() {
		const { classes, page, count } = this.props;
		const totalPages = Math.ceil(count / 10) || 1;
		return (
			<div style={{display: 'flex', alignItems: 'center', width: '80%', paddingLeft: 30}}>
				<Typography
                    variant="subtitle1"
                    className={classes.count}
                >
                    1-{count < 10 ? count : '10'} of {count}
                </Typography>
				<IconButton
					style={{marginLeft: "auto"}}
                    onClick={this.onPrevious}
                    disabled={page === 0}
                >
                    <img src={arrowBack} alt={arrowBack} />
                </IconButton>
				<IconButton
                    onClick={this.onNext}
                    disabled={page + 1 >= totalPages}
                >
                    <img src={arrowForward} alt={arrowForward} />
                </IconButton>
			</div>
		)
	}
}

export default withStyles(useStyles)(Pagination);