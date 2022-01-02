import { useState } from "react";
import classes from "../Styles/LandingPage.module.css";

function LandingPage() {
  const [theme, setTheme] = useState(classes.main);
  const [dNone, setDNone] = useState()
  const selectedTheme = (e) => {
    if (e.target.className === classes.dark) {
      setTheme(classes["dark-theme"]);
    } else {
      setTheme(classes["white-theme"]);
    }
    setTimeout(()=>{
      setDNone(classes["display-none"])
    },2000)
  };

  return (
    <div className={theme}>
      <div className={classes.dark} onClick={selectedTheme}></div>
      <div className={classes.white} onClick={selectedTheme}></div>
      <div className={dNone? dNone : classes["text-area"]}>
        <h1>Welcome to my site!</h1>
      </div>
    </div>
  );
}

export default LandingPage;
