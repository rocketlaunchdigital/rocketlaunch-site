"use client";

import { cn } from "@/lib";
import React, { useId } from "react";

export interface CpuArchitectureSvgProps {
  className?: string;
  width?: string;
  height?: string;
  text?: string;
  showCpuConnections?: boolean;
  lineMarkerSize?: number;
  animateText?: boolean;
  animateLines?: boolean;
  animateMarkers?: boolean;
}

const CpuArchitecture = ({
  className,
  width = "100%",
  height = "100%",
  text = "CPU",
  showCpuConnections = true,
  animateText = true,
  lineMarkerSize = 18,
  animateLines = true,
  animateMarkers = true,
}: CpuArchitectureSvgProps) => {
  const id = useId();
  const mask1Id = `cpu-mask-1-${id}`;
  const mask2Id = `cpu-mask-2-${id}`;
  const mask3Id = `cpu-mask-3-${id}`;
  const mask4Id = `cpu-mask-4-${id}`;
  const mask5Id = `cpu-mask-5-${id}`;
  const mask6Id = `cpu-mask-6-${id}`;
  const mask7Id = `cpu-mask-7-${id}`;
  const mask8Id = `cpu-mask-8-${id}`;
  const blueGradId = `cpu-blue-grad-${id}`;
  const yellowGradId = `cpu-yellow-grad-${id}`;
  const pinkishGradId = `cpu-pinkish-grad-${id}`;
  const whiteGradId = `cpu-white-grad-${id}`;
  const greenGradId = `cpu-green-grad-${id}`;
  const orangeGradId = `cpu-orange-grad-${id}`;
  const cyanGradId = `cpu-cyan-grad-${id}`;
  const roseGradId = `cpu-rose-grad-${id}`;
  const connectionGradId = `cpu-connection-gradient-${id}`;
  const textGradId = `cpu-text-gradient-${id}`;
  const lightShadowId = `cpu-light-shadow-${id}`;
  const circleMarkerId = `cpu-circle-marker-${id}`;

  return (
    <svg
      className={cn("text-muted", className)}
      width={width}
      height={height}
      viewBox="0 0 200 100"
    >
      {/* Paths */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.3"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart={`url(#${circleMarkerId})`}
      >
        {/* 1st */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 10 20 h 79.5 q 5 0 5 5 v 30"
        />

        {/* 2nd */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 180 10 h -69.7 q -5 0 -5 5 v 30"
        />

        {/* 3rd */}
        <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" />

        {/* 4th */}
        <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" />

        {/* 5th */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
        />

        {/* 6th */}
        <path d="M 94.8 95 v -36" />

        {/* 7th */}
        <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" />

        {/* 8th */}
        <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" />

        {/* Animation For Path Starting */}
        {animateLines && (
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        )}
      </g>

      {/* 1. Purple Light */}
      <g mask={`url(#${mask1Id})`}>
        <circle
          className="cpu-architecture cpu-line-1"
          cx="0"
          cy="0"
          r="8"
          fill={`url(#${blueGradId})`}
        />
      </g>

      {/* 2. Purple Light */}
      <g mask={`url(#${mask2Id})`}>
        <circle
          className="cpu-architecture cpu-line-2"
          cx="0"
          cy="0"
          r="8"
          fill={`url(#${yellowGradId})`}
        />
      </g>

      {/* 3. Purple Light */}
      <g mask={`url(#${mask3Id})`}>
        <circle
          className="cpu-architecture cpu-line-3"
          cx="0"
          cy="0"
          r="8"
          fill={`url(#${pinkishGradId})`}
        />
      </g>

      {/* 4. Purple Light */}
      <g mask={`url(#${mask4Id})`}>
        <circle
          className="cpu-architecture cpu-line-4"
          cx="0"
          cy="0"
          r="8"
          fill={`url(#${whiteGradId})`}
        />
      </g>

      {/* 5. Purple Light */}
      <g mask={`url(#${mask5Id})`}>
        <circle
          className="cpu-architecture cpu-line-5"
          cx="0"
          cy="0"
          r="8"
          fill={`url(#${greenGradId})`}
        />
      </g>

      {/* 6. Purple Light */}
      <g mask={`url(#${mask6Id})`}>
        <circle
          className="cpu-architecture cpu-line-6"
          cx="0"
          cy="0"
          r="8"
          fill={`url(#${orangeGradId})`}
        />
      </g>

      {/* 7. Purple Light */}
      <g mask={`url(#${mask7Id})`}>
        <circle
          className="cpu-architecture cpu-line-7"
          cx="0"
          cy="0"
          r="8"
          fill={`url(#${cyanGradId})`}
        />
      </g>

      {/* 8. Purple Light */}
      <g mask={`url(#${mask8Id})`}>
        <circle
          className="cpu-architecture cpu-line-8"
          cx="0"
          cy="0"
          r="8"
          fill={`url(#${roseGradId})`}
        />
      </g>

      {/* Purple Running Lights Animation */}
      <g>
        {/* Path definitions for running lights */}
        <path id={`run-path-1-${id}`} d="M 10 20 h 79.5 q 5 0 5 5 v 30" fill="none" />
        <path id={`run-path-2-${id}`} d="M 180 10 h -69.7 q -5 0 -5 5 v 30" fill="none" />
        <path id={`run-path-3-${id}`} d="M 130 20 v 21.8 q 0 5 -5 5 h -10" fill="none" />
        <path id={`run-path-4-${id}`} d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" fill="none" />
        <path id={`run-path-5-${id}`} d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" fill="none" />
        <path id={`run-path-6-${id}`} d="M 94.8 95 v -36" fill="none" />
        <path id={`run-path-7-${id}`} d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" fill="none" />
        <path id={`run-path-8-${id}`} d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" fill="none" />

        {/* Running light circles */}
        <circle r="4" fill="#8F00FF" opacity="1" filter={`url(#glow-filter-${id})`}>
          <animateMotion dur="2s" repeatCount="indefinite">
            <mpath href={`#run-path-1-${id}`} />
          </animateMotion>
        </circle>
        <circle r="4" fill="#8F00FF" opacity="1" filter={`url(#glow-filter-${id})`}>
          <animateMotion dur="2.2s" repeatCount="indefinite" begin="0.3s">
            <mpath href={`#run-path-2-${id}`} />
          </animateMotion>
        </circle>
        <circle r="4" fill="#8F00FF" opacity="1" filter={`url(#glow-filter-${id})`}>
          <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.1s">
            <mpath href={`#run-path-3-${id}`} />
          </animateMotion>
        </circle>
        <circle r="4" fill="#8F00FF" opacity="1" filter={`url(#glow-filter-${id})`}>
          <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s">
            <mpath href={`#run-path-4-${id}`} />
          </animateMotion>
        </circle>
        <circle r="4" fill="#8F00FF" opacity="1" filter={`url(#glow-filter-${id})`}>
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.7s">
            <mpath href={`#run-path-5-${id}`} />
          </animateMotion>
        </circle>
        <circle r="4" fill="#8F00FF" opacity="1" filter={`url(#glow-filter-${id})`}>
          <animateMotion dur="1.6s" repeatCount="indefinite" begin="0.2s">
            <mpath href={`#run-path-6-${id}`} />
          </animateMotion>
        </circle>
        <circle r="4" fill="#8F00FF" opacity="1" filter={`url(#glow-filter-${id})`}>
          <animateMotion dur="2.1s" repeatCount="indefinite" begin="0.4s">
            <mpath href={`#run-path-7-${id}`} />
          </animateMotion>
        </circle>
        <circle r="4" fill="#8F00FF" opacity="1" filter={`url(#glow-filter-${id})`}>
          <animateMotion dur="2.3s" repeatCount="indefinite" begin="0.6s">
            <mpath href={`#run-path-8-${id}`} />
          </animateMotion>
        </circle>
      </g>

      {/* CPU Box */}
      <g>
        {/* Cpu connections */}
        {showCpuConnections && (
          <g fill={`url(#${connectionGradId})`}>
            <rect x="93" y="37" width="2.5" height="5" rx="0.7" />

            <rect x="104" y="37" width="2.5" height="5" rx="0.7" />

            <rect
              x="116.3"
              y="44"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(90 116.25 45.5)"
            />

            <rect
              x="122.8"
              y="44"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(90 116.25 45.5)"
            />

            <rect
              x="104"
              y="16"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(180 105.25 39.5)"
            />

            <rect
              x="114.5"
              y="16"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(180 105.25 39.5)"
            />

            <rect
              x="80"
              y="-13.6"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(270 115.25 19.5)"
            />

            <rect
              x="87"
              y="-13.6"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(270 115.25 19.5)"
            />
          </g>
        )}

        {/* Main CPU Rectangle */}
        <rect
          x="85"
          y="40"
          width="30"
          height="20"
          rx="2"
          fill="#181818"
          filter={`url(#${lightShadowId})`}
        />

        {/* CPU Text */}
        <text
          x="100"
          y="52"
          fontSize="7"
          fill={animateText ? `url(#${textGradId})` : "white"}
          fontWeight="600"
          letterSpacing="0.05em"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {text}
        </text>
      </g>

      {/* Masks */}
      <defs>
        <mask id={mask1Id}>
          <path
            d="M 10 20 h 79.5 q 5 0 5 5 v 24"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>

        <mask id={mask2Id}>
          <path
            d="M 180 10 h -69.7 q -5 0 -5 5 v 24"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>

        <mask id={mask3Id}>
          <path
            d="M 130 20 v 21.8 q 0 5 -5 5 h -10"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>

        <mask id={mask4Id}>
          <path
            d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>

        <mask id={mask5Id}>
          <path
            d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>

        <mask id={mask6Id}>
          <path d="M 94.8 95 v -36" strokeWidth="0.5" stroke="white" />
        </mask>

        <mask id={mask7Id}>
          <path
            d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>

        <mask id={mask8Id}>
          <path
            d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>

        {/* Gradients - Updated to Purple */}
        <radialGradient id={blueGradId} fx="1">
          <stop offset="0%" stopColor="#B366FF" />
          <stop offset="50%" stopColor="#8F00FF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <radialGradient id={yellowGradId} fx="1">
          <stop offset="0%" stopColor="#B366FF" />
          <stop offset="50%" stopColor="#8F00FF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <radialGradient id={pinkishGradId} fx="1">
          <stop offset="0%" stopColor="#8F00FF" />
          <stop offset="50%" stopColor="#B366FF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <radialGradient id={whiteGradId} fx="1">
          <stop offset="0%" stopColor="#B366FF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <radialGradient id={greenGradId} fx="1">
          <stop offset="0%" stopColor="#8F00FF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <radialGradient id={orangeGradId} fx="1">
          <stop offset="0%" stopColor="#B366FF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <radialGradient id={cyanGradId} fx="1">
          <stop offset="0%" stopColor="#8F00FF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <radialGradient id={roseGradId} fx="1">
          <stop offset="0%" stopColor="#B366FF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <filter
          id={lightShadowId}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feDropShadow
            dx="1.5"
            dy="1.5"
            stdDeviation="1"
            floodColor="black"
            floodOpacity="0.1"
          />
        </filter>

        <marker
          id={circleMarkerId}
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth={lineMarkerSize}
          markerHeight={lineMarkerSize}
        >
          <circle
            id="innerMarkerCircle"
            cx="5"
            cy="5"
            r="2"
            fill="black"
            stroke="#232323"
            strokeWidth="0.5"
          >
            {animateMarkers && (
              <animate attributeName="r" values="0; 3; 2" dur="0.5s" />
            )}
          </circle>
        </marker>

        {/* Cpu connection gradient */}
        <linearGradient
          id={connectionGradId}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#4F4F4F" />
          <stop offset="60%" stopColor="#121214" />
        </linearGradient>

        {/* Glow filter for running lights */}
        <filter id={`glow-filter-${id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Add CPU Text Gradient */}
        <linearGradient id={textGradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#666666">
            <animate
              attributeName="offset"
              values="-2; -1; 0"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="25%" stopColor="white">
            <animate
              attributeName="offset"
              values="-1; 0; 1"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="50%" stopColor="#666666">
            <animate
              attributeName="offset"
              values="0; 1; 2;"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export { CpuArchitecture };

