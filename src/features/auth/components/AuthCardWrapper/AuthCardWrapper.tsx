import { Box, Card, useTheme } from '@mui/material';
import { ReactNode } from 'react';

type AuthCardWrapperProps = {
  children: ReactNode;
};

export default function AuthCardWrapper({ children }: AuthCardWrapperProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        border: '1px solid',
        borderColor: theme.palette.primary.light,
        ':hover': {
          boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)',
        },
        maxWidth: { xs: 400, lg: 475 },
        margin: { xs: 2.5, md: 3 },
        '& > *': {
          flexGrow: 1,
          flexBasis: '50%',
        },
      }}
    >
      <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
    </Card>
  );
}
