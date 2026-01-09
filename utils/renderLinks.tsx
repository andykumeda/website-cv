import React from 'react';

/**
 * Parses a string containing markdown-style links [text](url) and returns a ReactNode array.
 * Example: "Company ([Link](https://example.com))" -> ["Company (", <a href="...">Link</a>, ")"]
 */
export const renderLinks = (text: string): React.ReactNode => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }

        parts.push(
            <a
                key={match.index}
                href={match[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 underline decoration-blue-300 underline-offset-2 transition-colors"
            >
                {match[1]}
            </a>
        );

        lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? <>{parts}</> : text;
};
