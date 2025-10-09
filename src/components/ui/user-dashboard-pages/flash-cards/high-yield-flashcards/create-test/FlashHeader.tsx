import React, { useState } from 'react';
import { Shuffle, RefreshCw, Volume2 } from 'lucide-react';

interface FlashHeaderProps {
    title: string;
    currentIndex: number;
    total: number;
    onShuffle: () => void;
    onRepeatDifficult: () => void;
    onAudio: () => void;
}

export const FlashHeader: React.FC<FlashHeaderProps> = ({
    title,
    currentIndex,
    total,
    onShuffle,
    onRepeatDifficult,
    onAudio,
}) => (
    <div className="flex justify-between items-center py-4 bg-white border-gray-200 px-2 md:px-0 ">
        <div>
            <h2 className="text-md font-semibold text-gray-900 hidden md:block">{title}</h2>
            <p className="text-xs text-gray-500 mt-1">
                Card {currentIndex + 1} of {total}
            </p>
        </div>
        <div className="flex items-center gap-4">
            <button
                onClick={onShuffle}
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
                type="button"
            >
                <Shuffle size={20} />
                <span>Shuffle</span>
            </button>
            <button
                onClick={onRepeatDifficult}
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
                type="button"
            >
                <RefreshCw size={20} />
                <span>Repeat Difficult</span>
            </button>
            <button
                onClick={onAudio}
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-150 focus:outline-none cursor-pointer focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
                type="button"
            >
                <Volume2 size={20} />
                <span>Audio</span>
            </button>
        </div>
    </div>
);