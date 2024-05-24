import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import Layout from "../components/layout";
import "./AuthCard.css";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Google } from "@mui/icons-material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
const Signup = () => {
  return (
    <Layout>
      <div className="auth-card signup bg-light" style={{ gap: "1.2rem" }}>
        <div className="title-wrapper">
          <PersonAddAlt1Icon color="primary" sx={{ fontSize: "42px" }} />
          <Typography fontSize={"32px"}>Sign up</Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="First Name" required fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required fullWidth label="Last Name" />
          </Grid>
        </Grid>
        <TextField type="email" label="Email" fullWidth required />
        <TextField type="password" label="Password" fullWidth required />
        <TextField
          type="password"
          label="Confirm Password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" size="small" />}
          label="By continuing, I agree to Y's Terms of use and Privacy Policy"
          style={{ alignSelf: "start" }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Sign Up
        </Button>
        {/* <Typography sx={{ margin: "-0.4rem", fontWeight: "600" }}>
          OR
        </Typography> */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<Google />}
          fullWidth
        >
          Continue with Google
        </Button>
        <Link href="#" variant="body2">
          {"Have an account? Sign In"}
        </Link>
      </div>
    </Layout>
  );
};

export default Signup;
