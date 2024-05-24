import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import Layout from "../components/layout";
import "./AuthCard.css";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { CheckBox } from "@mui/material/Checkbox";
import { Google } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Login = () => {
  return (
    <Layout>
      <div className="auth-card bg-light">
        <div className="title-wrapper">
          <AccountCircleIcon color="primary" sx={{ fontSize: "42px" }} />
          <Typography fontSize={"32px"}>Sign in</Typography>
        </div>
        <TextField placeholder="Email or Username" fullWidth required />
        <TextField type="password" placeholder="Password" fullWidth />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
          style={{ alignSelf: "start" }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Google />}
          fullWidth
        >
          Continue with Google
        </Button>
        <Button type="submit" variant="contained" fullWidth>
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Typography fontSize={"0.8rem"}>
          By continuing, you are agree to Y's Terms of use and Privacy Policy
        </Typography>
      </div>
    </Layout>
  );
};

export default Login;
