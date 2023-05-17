import { Button } from "./Button";
import "../../index.css";

const meta = {
	title: "UI/Button",
	component: Button,
	tags: ["autodocs"],
	// argTypes: {
	// 	variant: {
	// 		type: "string",
	// 		description: "Вариант внешнего вида",
	// 		defaultValue: "primary",
	// 		options: ["primary", "square", "link"],
	// 		control: {
	// 			type: "radio",
	// 		},
	// 	},
	// 	size: {
	// 		type: "string",
	// 		description: "Размера кнопки",
	// 		defaultValue: "medium",
	// 		options: ["small", "medium", "large"],
	// 		control: {
	// 			type: "radio",
	// 		},
	// 	},
	// 	type: {
	// 		type: "string",
	// 		description: "Тип кнопки",
	// 		defaultValue: "button",
	// 		options: ["button", "submit"],
	// 		control: {
	// 			type: "radio",
	// 		},
	// 	},
	// 	children: {
	// 		type: "string",
	// 		description: "Текст кнопки",
	// 		name: "label",
	// 		defaultValue: "Click me",
	// 	},
	// },
};

export default meta;

export const Default = {
	args: {
		children: "Press me",
		variant: "primary",
		size: "small",
		type: "button",
	},
};
export const Square = {
	args: {
		children: "Press me",
		variant: "square",
		size: "small",
		type: "button",
	},
};
export const Small = {
	args: {
		children: "Press me",
		variant: "primary",
		size: "small",
		type: "button",
	},
};
export const Medium = {
	args: {
		children: "Press me",
		variant: "primary",
		size: "medium",
		type: "button",
	},
};
export const Large = {
	args: {
		children: "Press me",
		variant: "primary",
		size: "large",
		type: "button",
	},
};
