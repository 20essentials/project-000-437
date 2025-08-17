import React from "react";
import ReactDOM from "react-dom/client";
import { createStitches } from "@stitches/react";

const { styled, keyframes, globalCss } = createStitches();

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  "*::before": { margin: 0, padding: 0, boxSizing: "border-box" },
  "*::after": { margin: 0, padding: 0, boxSizing: "border-box" },
  html: {
    scrollBehavior: "smooth",
    scrollbarWidth: "thin",
    scrollbarColor: "transparent transparent",
  },
  body: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    placeContent: "center",
    overflow: "hidden",
  },
});

const mover = keyframes({
  "0%, 100%": { left: "150%", top: "-50%" },
  "50%": { left: "-110%", top: "50%" },
});

const ContainerAro = styled("aside", {
  width: "130px",
  height: "130px",
  position: "relative",
  "@media (width <= 1111px)": { zoom: 0.55 },
  "&:hover .aro": { filter: "invert(1)", color: "white" },
});

const Aro = styled("article", {
  width: "100%",
  height: "100%",
  border: "3px solid currentColor",
  position: "absolute",
  top: 0,
  borderRadius: "50%",
  transition: "filter 0.5s ease",
  animation: `${mover} 4s infinite`,
  variants: {
    index: {
      red: { backgroundColor: "#ff5733" },
      green: { backgroundColor: "#33ff57" },
      blue: { backgroundColor: "#3357ff" },
      purple: { backgroundColor: "#9d80cb" },
      cyan: { backgroundColor: "#33fff5" },
      yellow: { backgroundColor: "#f5ff33" },
      orange: { backgroundColor: "#ff8c33" },
      violet: { backgroundColor: "#8c33ff" },
      mint: { backgroundColor: "#33ff8c" },
      pink: { backgroundColor: "#ff3380" },
    },
  },
});

function getVariant(i) {
  if (i <= 5) return "red";
  if (i <= 10) return "green";
  if (i <= 15) return "blue";
  if (i <= 20) return "purple";
  if (i <= 25) return "cyan";
  if (i <= 30) return "yellow";
  if (i <= 35) return "orange";
  if (i <= 40) return "violet";
  if (i <= 45) return "mint";
  return "pink";
}

export default function App() {
  globalStyles();
  return (
    <ContainerAro>
      {Array.from({ length: 50 }, (_, i) => (
        <Aro
          key={i}
          className="aro"
          css={{ animationDelay: `${(i + 1) * -0.04}s` }}
          index={getVariant(i + 1)}
        />
      ))}
    </ContainerAro>
  );
}

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
