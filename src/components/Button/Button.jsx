import cn from "classnames";
import classes from "./Button.module.scss";
import propTypes from "prop-types";

export const Button = ({
	onClick,
	variant = "",
	size = "medium",
	type = "button",
	children,
}) => {
	const mainCn = cn(classes.button, classes[size], classes[variant]);

	return (
		<button className={mainCn} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	variant: propTypes.oneOf(["primary", "square", "link"]),
	size: propTypes.oneOf(["small", "medium", "large"]),
	type: propTypes.oneOf(["button", "submit"]),
	children: propTypes.node,
	onClick: propTypes.func,
};
