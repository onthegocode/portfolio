const Logo = ({ svgClass, pathClass }) => {
	return (
		<svg
			className={svgClass}
			xmlns="http://www.w3.org/2000/svg"
			width="59"
			height="68"
			viewBox="0 0 59 68"
			fill="none">
			<path
				className={pathClass}
				d="M57.3915 66.7915L29.8749 2.65911L19.1119 27.0957H29.6708H30.3766L30.6489 27.747L35.9658 40.463L36.5801 41.9322H34.9877H24.2054H12.5758L2.74412 64.252L18.7658 51.2152L19.0581 50.9773H19.435H39.6452H40.3505L40.623 51.6278L46.9773 66.7915H57.3915Z"
				stroke="url(#paint0_linear_13_89)"
				strokeWidth="2.12036"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_13_89"
					x1="29.5"
					y1="67.8517"
					x2="29.5"
					y2="7.62939e-06"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#08D9D6" />
					<stop offset="0.598958" stopColor="#FF2E63" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default Logo;
