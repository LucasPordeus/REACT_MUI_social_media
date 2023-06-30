import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./post";
import styled from 'styled-components';

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [2000]);

  const Container = styled.div`
  height: 100%;
  width: 100%;
  
  `

  return (
    <Container>
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={100} />
        </Stack>
      ) : (
        <>
          <Post Person="ANA" Text="Lindo por do sol amigo!"/>
        </>
      )}
    </Box>
    </Container>
  );
};

export default Feed;
