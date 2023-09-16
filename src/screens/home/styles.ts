import React from "react"
import colors from "../../constants/colors"

const styles = {
	container: {
		display: "block",
		paddingRight: "15%",
		paddingLeft: "15%",
		flexDirection: "column",
		paddingBottom: 32,
	} as React.CSSProperties,
	rowHeader: {
		paddingTop: 12,
		paddingBottom: 12,
		paddingRight: "10%",
		paddingLeft: "10%",
		position: "sticky",
		top: 0,
		zIndex: 2,
		backgroundColor: colors.white,
	} as React.CSSProperties,
	btn: {
		backgroundColor: colors.black,
		color: colors.white,
		borderRadius: 24,
		fontFamily: "RobotoRegular",
		width: 112,
		borderWidth: 0,
	} as React.CSSProperties,
	boxInformation: {
		backgroundImage:
			"linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )",
		paddingTop: 32,
		paddingBottom: 32,
		paddingRight: 24,
		paddingLeft: 24,
		borderRadius: 12,
	} as React.CSSProperties,
	icon: {
		fontSize: 14,
	} as React.CSSProperties,
	btnNone: {
		borderWidth: 0,
		padding: 0,
		width: 32,
		height: 32,
		borderRadius: 24,
		alignItems: "center",
		justifyContent: "center",
		margin: 0,
	} as React.CSSProperties,
	logo: {
		width: 80,
		height: 80,
	} as React.CSSProperties,
	txtTitle: {
		display: "block",
		textAlign: "center",
	} as React.CSSProperties,
	driver: {
		borderColor: colors.black,
	} as React.CSSProperties,
	colInfo: {
		border: "1px solid #000",
		borderRadius: 12,
		paddingTop: 16,
		paddingBottom: 16,
		paddingRight: 12,
		paddingLeft: 12,
	} as React.CSSProperties,
	txtTitleBlock: {
		textAlign: "center",
		display: "block",
		marginTop: 8,
	} as React.CSSProperties,
	lottie: {
		height: 120,
	} as React.CSSProperties,
	pRightBlock: {
		paddingRight: 8,
		paddingLeft: 8,
	} as React.CSSProperties,
	txtMap: {
		lineHeight: 2,
	} as React.CSSProperties,
	pRightLarge: {
		paddingRight: 32,
		paddingLeft: 32,
	} as React.CSSProperties,
	boxExperience: {
		backgroundImage:
			"linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )",
		paddingTop: 16,
		paddingBottom: 16,
		paddingRight: 24,
		paddingLeft: 24,
		borderRadius: 12,
	} as React.CSSProperties,
	txtLink: {
		textDecorationLine: "underline",
		color: colors.linked,
	} as React.CSSProperties,
	iconStore: {
		width: 32,
		height: 32,
	} as React.CSSProperties,
	paddingNone: {
		padding: 0,
	} as React.CSSProperties,
	boxImg: {
		backgroundImage:
			"linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )",
		borderRadius: 12,
	} as React.CSSProperties,
} as const
export default styles
