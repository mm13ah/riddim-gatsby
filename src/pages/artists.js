import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/shared/Layout';
import ArtistContainer from '../components/artists/ArtistContainer';

const ArtistsDiv = styled.div`
  width: 80vw;
  margin: 100px auto auto auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Artists = ({ data }) => {
  const artists = data.allArtistsJson.edges;
  return (
    <Layout>
      <Helmet>
        <title>Riddim Records | Artists</title>
      </Helmet>
      <ArtistsDiv className="artists">
        {artists.map(artist => <ArtistContainer key={artist.node.key} artist={artist} />)}
      </ArtistsDiv>
    </Layout>
  );
};

Artists.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Artists;

export const query = graphql`
  query {
    allArtistsJson {
      edges {
        node {
          key
          name
          pic {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
