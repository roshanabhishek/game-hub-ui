type PaddleProps = {
    x: number;
    y: number;
}

const Paddle = ({ x, y }: PaddleProps) => (
<rect x={x} y={y} width="10" height="100" fill="white" />
);

export default Paddle