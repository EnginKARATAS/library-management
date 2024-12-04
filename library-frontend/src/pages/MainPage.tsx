import { Grid2 as Grid } from "@mui/material";
import "../styles/components/mainPage.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function MainPage() {
  const navigate = useNavigate();
  const onButtonClick = (route: string) => {
    navigate(route);
  };
  
  return (
    <Grid
      container
      justifyContent="center"
      className="main-container"
    >
      <div className="first-section-container">
        <Grid container>
          <Grid justifyContent="center" alignItems="center">
            <Grid container justifyContent="center" alignItems="center" className="left-side">
              <img
                style={{ width: "92%" }}
                src="/firstSectionImage1.png"
                alt="first section left image"
              />
            </Grid>
            <Grid
              className="button-side"
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Button onClick={()=>onButtonClick("books")} variant="contained" style={{ backgroundColor: "#4a2e6f", color: "white" }}>See Available Books!</Button>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="right-side"
          >
            <img
              style={{ width: "92%" }}
              src="/firstSectionImage2.png"
              alt="first section right image"
            />
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
