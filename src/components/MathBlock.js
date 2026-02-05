import React from 'react';
import katex from 'katex';

export default function MathBlock({ latex, displayMode = true }) {
  const html = katex.renderToString(latex, {
    displayMode,
    throwOnError: false,
  });
  return (
    <div
      className="math-block"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
