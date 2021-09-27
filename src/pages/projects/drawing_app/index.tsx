import { useEffect, useRef, useState } from 'react';
import styles from './index.less';

const WIDTH = 800;
const HEIGHT = 700;

export default () => {
  const [isPress, setIsPress] = useState<boolean>(false);
  const [size, setSize] = useState<number>(10);
  const [lastX, setLastX] = useState<number>(0);
  const [lastY, setLastY] = useState<number>(0);
  const [color, setColor] = useState<string>('black');
  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef(null);

  const drawCircle = (x: number, y: number) => {
    const ctx = canvasRef.current?.getContext('2d')!;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  };

  const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
    const ctx = canvasRef.current?.getContext('2d')!;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
  };

  const clear = () => {
    const ctx = canvasRef.current?.getContext('2d')!;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  };

  useEffect(() => {
    const onMouseUp = () => {
      setIsPress(false);
    };
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div className={styles.container}>
      <canvas
        className={styles.canvas_draw}
        ref={canvasRef}
        width={`${WIDTH}`}
        height={`${HEIGHT}`}
        onMouseMove={(e: React.MouseEvent) => {
          if (!isPress) {
            return;
          }
          const x2 = e.nativeEvent.offsetX;
          const y2 = e.nativeEvent.offsetY;

          drawCircle(x2, y2);
          drawLine(lastX, lastY, x2, y2);

          setLastX(x2);
          setLastY(y2);
        }}
        onMouseDown={(e: React.MouseEvent) => {
          setIsPress(true);
          drawCircle(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          setLastX(e.nativeEvent.offsetX);
          setLastY(e.nativeEvent.offsetY);
        }}
      ></canvas>
      <div className={styles.toolbox}>
        <button
          onClick={() => {
            setSize(Math.max(5, size - 5));
          }}
        >
          -
        </button>
        <span id="size">{size}</span>
        <button
          onClick={() => {
            setSize(Math.min(50, size + 5));
          }}
        >
          +
        </button>
        <input
          type="color"
          onChange={(e: any) => {
            setColor((e.target as HTMLInputElement).value);
          }}
        ></input>
        <button
          onClick={() => {
            clear();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
