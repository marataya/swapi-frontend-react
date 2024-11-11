import {type ButtonProps} from "./types.ts";

export default function Button({bgColor, fontSize}: ButtonProps) {

    return (
        <button className={`bg-blue-700 text-${bgColor}-300 text-${fontSize} rounded px-4 py-2 mb-2`}>
            <div>Click me</div>
        </button>
    );
}
