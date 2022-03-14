import { Divider, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

import Logo from '@/components/Logo/Logo';

import AuthCardWrapper from '../../components/AuthCardWrapper/AuthCardWrapper';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function SignInPage() {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AuthWrapper>
      <Grid container direction='column' justifyContent='flex-end' sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent='center' alignItems='center' sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems='center' justifyContent='center'>
                  <Grid item sx={{ mb: 3 }}>
                    <Link to='#'>
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? 'column-reverse' : 'row'}
                      alignItems='center'
                      justifyContent='center'
                    >
                      <Grid item>
                        <Stack alignItems='center' justifyContent='center' spacing={1}>
                          <Typography
                            gutterBottom
                            color={theme.palette.secondary.main}
                            variant={matchDownSM ? 'h3' : 'h2'}
                          >
                            Hi, Welcome Back
                          </Typography>
                          <Typography variant='caption' fontSize='16px' textAlign={matchDownSM ? 'center' : 'inherit'}>
                            Enter your credentials to continue
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <LoginForm />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item container direction='column' alignItems='center' xs={12}>
                      <Typography
                        component={Link}
                        to='/pages/register/register3'
                        variant='subtitle1'
                        sx={{ textDecoration: 'none' }}
                      >
                        Don&apos;t have an account?
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
