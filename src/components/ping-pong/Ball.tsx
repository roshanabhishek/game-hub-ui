type BallProps =  {
x: number;
y: number;
}

const Ball = ({ x, y }: BallProps) => (
<circle cx={x} cy={y} r="10" fill="white" />
);

export default Ball;