import { forwardRef } from "react";

type PaddleProps = {
    x: number;
}

const Paddle = forwardRef<SVGRectElement, PaddleProps>((props, inputRef) => (
<rect x={props.x} width="10" height="100" fill="white" ref={inputRef} />
));

export default Paddle