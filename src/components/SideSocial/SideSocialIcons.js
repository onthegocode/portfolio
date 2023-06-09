const SideSocialIcons = ({ social }) => {
	const icons = {
		github: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="25"
				height="25"
				viewBox="0 0 24 24"
				fill="none">
				<path
					d="M9 19.0001C4 20.5001 4 16.5001 2 16.0001M16 22.0001V18.1301C16.0375 17.6532 15.9731 17.1739 15.811 16.7239C15.6489 16.2738 15.3929 15.8635 15.06 15.5201C18.2 15.1701 21.5 13.9801 21.5 8.52006C21.4997 7.12389 20.9627 5.78126 20 4.77006C20.4559 3.54857 20.4236 2.19841 19.91 1.00006C19.91 1.00006 18.73 0.65006 16 2.48006C13.708 1.85888 11.292 1.85888 9 2.48006C6.27 0.65006 5.09 1.00006 5.09 1.00006C4.57638 2.19841 4.54414 3.54857 5 4.77006C4.03013 5.78876 3.49252 7.14352 3.5 8.55006C3.5 13.9701 6.8 15.1601 9.94 15.5501C9.611 15.89 9.35726 16.2955 9.19531 16.74C9.03335 17.1845 8.96681 17.6581 9 18.1301V22.0001"
					stroke="white"
					strokeOpacity="0.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		linkedin: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="25"
				height="25"
				viewBox="0 0 24 24"
				fill="none">
				<path
					d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
					stroke="white"
					strokeOpacity="0.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M6 9H2V21H6V9Z"
					stroke="white"
					strokeOpacity="0.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
					stroke="white"
					strokeOpacity="0.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		upwork: (
			<svg
				className="upwork"
				strokeWidth=".4"
				xmlns="http://www.w3.org/2000/svg"
				width="25"
				height="25"
				viewBox="0 0 24 24">
				<path
					d="M13.593 20.5H10.912C10.8374 20.4999 10.7637 20.4831 10.6964 20.4508C10.6291 20.4186 10.5698 20.3717 10.523 20.3136C10.4761 20.2555 10.4428 20.1877 10.4255 20.1151C10.4082 20.0425 10.4074 19.967 10.423 19.894L11.976 12.722C11.652 12.306 11.3509 11.8727 11.074 11.424C10.707 14.102 8.375 16.173 5.561 16.173C2.495 16.174 0 13.713 0 10.688V4C0 3.86739 0.0526784 3.74021 0.146447 3.64645C0.240215 3.55268 0.367392 3.5 0.5 3.5H3.122C3.25461 3.5 3.38179 3.55268 3.47555 3.64645C3.56932 3.74021 3.622 3.86739 3.622 4V10.688C3.623 11.731 4.494 12.582 5.561 12.584C6.629 12.582 7.5 11.731 7.501 10.688V4C7.501 3.86739 7.55368 3.74021 7.64745 3.64645C7.74121 3.55268 7.86839 3.5 8.001 3.5H10.623C10.845 3.5 11.04 3.646 11.102 3.858C11.5773 5.45216 12.2417 6.98372 13.081 8.42C14.075 6.218 15.962 4.934 18.286 4.934C21.436 4.934 23.998 7.453 23.998 10.548C23.998 13.65 21.436 16.173 18.286 16.173C17.177 16.1726 16.084 15.9076 15.098 15.4L14.079 20.105C14.0559 20.2168 13.995 20.3171 13.9064 20.3891C13.8178 20.4611 13.7071 20.5003 13.593 20.5ZM11.532 19.5H13.189L14.266 14.525C14.2824 14.4462 14.3176 14.3725 14.3687 14.3103C14.4199 14.2481 14.4853 14.1993 14.5595 14.168C14.6337 14.1367 14.7143 14.1239 14.7946 14.1307C14.8748 14.1375 14.9521 14.1637 15.02 14.207C16.043 14.849 17.142 15.174 18.287 15.174C20.886 15.174 22.999 13.099 22.999 10.549C22.999 8.005 20.885 5.935 18.287 5.935C16.105 5.935 14.382 7.336 13.677 9.684C13.6492 9.77409 13.5966 9.85453 13.5253 9.91612C13.4539 9.97771 13.3666 10.018 13.2734 10.0323C13.1802 10.0465 13.0849 10.0343 12.9984 9.99696C12.9118 9.9596 12.8375 9.89862 12.784 9.821C11.766 8.319 10.854 6.398 10.254 4.501H8.502V10.689C8.5 12.284 7.181 13.583 5.562 13.585C3.943 13.583 2.625 12.284 2.623 10.69V4.5H1V10.688C1 13.162 3.046 15.174 5.561 15.174C8.077 15.174 10.124 13.161 10.124 10.688V9.568C10.124 9.45482 10.1624 9.34498 10.2329 9.25645C10.3034 9.16792 10.4019 9.10593 10.5122 9.08061C10.6225 9.0553 10.7381 9.06816 10.8402 9.11709C10.9422 9.16603 11.0247 9.24814 11.074 9.35C11.623 10.479 12.239 11.465 12.904 12.282C12.9514 12.34 12.9852 12.4081 13.0026 12.481C13.0201 12.5538 13.0209 12.6297 13.005 12.703L11.532 19.5ZM18.288 13.589C17.182 13.589 16.086 13.164 15.031 12.326C14.9579 12.268 14.9025 12.1907 14.8711 12.1029C14.8396 12.0151 14.8333 11.9202 14.853 11.829L15.071 10.818C15.461 8.705 16.632 7.506 18.288 7.506C19.992 7.506 21.378 8.87 21.378 10.547C21.378 12.225 19.991 13.589 18.288 13.589ZM15.897 11.729C16.691 12.3 17.494 12.589 18.287 12.589C19.439 12.589 20.377 11.673 20.378 10.548C20.378 9.423 19.44 8.507 18.288 8.507C16.822 8.507 16.267 9.849 16.059 10.975L15.897 11.729Z"
					fill="white"
					fillOpacity="0.8"
				/>
			</svg>
		),
		codepen: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="25"
				height="25"
				viewBox="0 0 24 24"
				fill="none">
				<path
					d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"
					stroke="white"
					strokeOpacity="0.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 22V15.5"
					stroke="white"
					strokeOpacity="0.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M22 8.5L12 15.5L2 8.5"
					stroke="white"
					strokeOpacity="0.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2 15.5L12 8.5L22 15.5"
					stroke="white"
					strokeOpacity="0.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 2V8.5"
					stroke="white"
					strokeOpacity="0.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		mail: (
			<svg
				className="mail"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none">
				<path
					d="M4 7H20C21.1 7 22 7.9 22 9V21C22 22.1 21.1 23 20 23H4C2.9 23 2 22.1 2 21V9C2 7.9 2.9 7 4 7Z"
					stroke="white"
					strokeOpacity="0.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M22 9L12 16L2 9"
					stroke="white"
					strokeOpacity="0.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		exit: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none">
				<path
					d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
					stroke="black"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15 9L9 15"
					stroke="black"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 9L15 15"
					stroke="black"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		link: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none">
				<path
					d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
					stroke="white"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15 3H21V9"
					stroke="white"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M10 14L21 3"
					stroke="white"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	};

	return icons[social];
};

export default SideSocialIcons;
