import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body {
		font-size: 16px;
		-webkit-font-smoothing: antialiased;
		background-color: #ffffff;
	}

	#root {
		max-width: 1248px;
		margin: 0 auto;
		/* padding: 8rem 6rem; */
	}

	button {
		cursor: pointer;
	}

`;

