import styled, { css } from "styled-components";

export const TableContainer = styled.div `
	overflow-x: auto;
`
export const Table = styled.table `
	margin: 20px auto;
	border-collapse: collapse;
`
export const TableSegment = styled.td `
	padding: 5px 10px;
	color: inherit;
	background-color: inherit;
	text-align: center;
	width: fit-content;
	white-space: nowrap;
	${props => 
	props.host && 
	css `
			background-color: purple;
			color: white;
			text-transform: uppercase;
	`}

	${props => 
		props.NA && 
		css `
		opacity: 0.5;
		`}
		${props => 
		props.stickyRight && 
		css `
		position: sticky;
		right:0;
		box-shadow: inset 7px 0 20px 0  #aaaaaa;

		`}
		${props => 
		props.stickyLeft && 
		css `
		position: sticky;
		left:0;
		box-shadow: inset -7px 0 20px 0  #aaaaaa;

		`}

`
export const TableHeaderRow = styled.tr `
	background-color: aliceblue;
`

export const TableRow = styled.tr `
	border-top: 1px solid black;
`
export const TableBody = styled.tbody `
	${TableRow}:nth-child(even) {
		background-color: #e4e4e4;
	}
	${TableRow}:nth-child(odd) {
		background-color: #c3c3c3;
	}
`

export const WinnerText = styled.h1 `
	text-align: center;
`