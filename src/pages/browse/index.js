import React from "react";

import { Container, Title, List, PlayList } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <PlayList to="/playlists/1">
        <img
          src="https://www.music-bazaar.com/album-images/vol1/74/74070/570528-big/Times-Like-These-CD2-cover.jpg"
          alt="Cover"
        />
        <strong>Rock dos bons</strong>
        <p>
          Relaxe enquanto você programa ouvindo apenas as melhores do rock
          mundial!
        </p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://www.music-bazaar.com/album-images/vol1/74/74070/570528-big/Times-Like-These-CD2-cover.jpg"
          alt="Cover"
        />
        <strong>Rock dos bons</strong>
        <p>
          Relaxe enquanto você programa ouvindo apenas as melhores do rock
          mundial!
        </p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://www.music-bazaar.com/album-images/vol1/74/74070/570528-big/Times-Like-These-CD2-cover.jpg"
          alt="Cover"
        />
        <strong>Rock dos bons</strong>
        <p>
          Relaxe enquanto você programa ouvindo apenas as melhores do rock
          mundial!
        </p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://www.music-bazaar.com/album-images/vol1/74/74070/570528-big/Times-Like-These-CD2-cover.jpg"
          alt="Cover"
        />
        <strong>Rock dos bons</strong>
        <p>
          Relaxe enquanto você programa ouvindo apenas as melhores do rock
          mundial!
        </p>
      </PlayList>
    </List>
  </Container>
);

export default Browse;
