import { Button } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Clear() {
  function show() {
    localStorage.clear();
    setTimeout(() => {
      
      location.reload()
    }, 100);
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
      className="clearStorage"
    >
      <h1>clique para linpar</h1>
      <br />
      <Link to="/">
        <Button onClick={show} variant="outlined">
          clear cache
        </Button>
      </Link>
    </div>
  );
}
