import { useRef, useEffect } from 'react';

interface SignaturePadProps {
  onChange: (dataUrl: string | null) => void;
  value: string | null;
}

export function SignaturePad({ onChange, value }: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const initialised = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || initialised.current) return;
    initialised.current = true;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.strokeStyle = '#1B3A5C';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (value) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0, rect.width, rect.height);
      img.src = value;
    }
  }, [value]);

  function getPos(e: MouseEvent | TouchEvent, canvas: HTMLCanvasElement) {
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return { x: (e as MouseEvent).clientX - rect.left, y: (e as MouseEvent).clientY - rect.top };
  }

  function startDraw(e: React.MouseEvent | React.TouchEvent) {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    isDrawing.current = true;
    const pos = getPos(e.nativeEvent as MouseEvent | TouchEvent, canvas);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function draw(e: React.MouseEvent | React.TouchEvent) {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    e.preventDefault();
    const pos = getPos(e.nativeEvent as MouseEvent | TouchEvent, canvas);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  function endDraw() {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    const canvas = canvasRef.current;
    if (canvas) onChange(canvas.toDataURL());
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    onChange(null);
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="w-full h-32 border border-gray-200 rounded-lg bg-white touch-none cursor-crosshair"
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={endDraw}
        onMouseLeave={endDraw}
        onTouchStart={startDraw}
        onTouchMove={draw}
        onTouchEnd={endDraw}
      />
      <button
        type="button"
        onClick={clearCanvas}
        className="mt-1.5 text-xs text-gray-400 underline hover:text-gray-600 transition-colors"
      >
        Clear signature
      </button>
    </div>
  );
}
