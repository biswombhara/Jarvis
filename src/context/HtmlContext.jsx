import React, { createContext, useContext } from 'react';
import sanitizeHtml from 'sanitize-html'; 
export const HtmlContext = createContext();

export default function HtmlProvider(props) {
  const sanitizedHtml = sanitizeHtml(props.htmlString);

  return (
    <HtmlContext.Provider value={sanitizedHtml}>
      {props.children}
    </HtmlContext.Provider>
  );
}

