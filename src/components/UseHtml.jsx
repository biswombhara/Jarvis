import { useContext } from "react";
import { HtmlContext } from "../context/HtmlContext";

export default function UseHtml() {
    const htmlContent = useContext(HtmlContext);
  
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  }