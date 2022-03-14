import { Link, Stack, Typography } from '@mui/material';

export default function AuthFooter() {
  return (
    <Stack direction='row' justifyContent='end'>
      <Typography
        variant='subtitle2'
        component={Link}
        href='https://github.com/truonghungit/react-starter-template'
        target='_blank'
        underline='hover'
      >
        &copy; React dashboard
      </Typography>
    </Stack>
  );
}
