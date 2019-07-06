import React from 'react';
import classes from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => (
	<h5 className={classes.h5}><Link to="/">QUANTUM</Link></h5>
)

export default Logo;