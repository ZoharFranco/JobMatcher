import React, {useEffect, useState} from "react";

type CircularProgressProps = {
    percentage: number;
    label: string;
    size?: number;
};

export const CircularProgress: React.FC<CircularProgressProps> = ({
                                                                      percentage,
                                                                      label,
                                                                      size = 200,
                                                                  }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(percentage), 100);
        return () => clearTimeout(timer);
    }, [percentage]);

    // Function to determine gradient color based on percentage
    const getGradientColor = (percentage: number) => {
        if (percentage < 50) return "#dc3545"; // Red
        if (percentage < 80) return "#ffc107"; // Yellow
        return "#28a745"; // Green
    };

    const gradientColor = getGradientColor(progress);

    return (
        <div className="circular-progress" style={{width: size, height: size}}>
            <svg viewBox="0 0 36 36" className="circular-chart" style={{width: size, height: size}}>
                <defs>
                    <linearGradient id={`gradient-${label}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={gradientColor} stopOpacity="1"/>
                        <stop offset="100%" stopColor={gradientColor} stopOpacity="0.8"/>
                    </linearGradient>
                </defs>
                <path
                    className="circle-bg"
                    d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="circle"
                    stroke={`url(#gradient-${label})`} /* Apply gradient here */
                    strokeDasharray={`${progress}, 100`}
                    d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
            <div className="percentage-label">
                <span>{progress}% </span>
                <small>{label}</small>
            </div>
        </div>
    );
};
