import React, { useEffect, useRef, useState } from 'react';

const PlotCanvas = () => {
    const canvasRef = useRef(null);
    const [multiplier, setMultiplier] = useState(1.00);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        const updateCanvas = () => {
            // Clear the canvas
            ctx.clearRect(0, 0, width, height);

            // Set background color
            ctx.fillStyle = '#d3d3d3';
            ctx.fillRect(0, 0, width, height);

            // Write the multiplier inside the gray box
            ctx.fillStyle = 'black';
            ctx.font = '30px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(multiplier.toFixed(2) + 'x', width / 2, height / 2);
        };

        updateCanvas();

        const interval = setInterval(() => {
            setMultiplier(prevMultiplier => {
                // Random chance for the multiplier to go to zero
                if (Math.random() < 0.001) { // 0.1% chance
                    return 1;
                }
                return prevMultiplier + 0.01 * multiplier; // Increase by 1% of the current multiplier
            });
        }, 100);

        return () => clearInterval(interval);
    }, [multiplier]);

    return <canvas ref={canvasRef} width={500} height={500} />;
};

export default PlotCanvas;
