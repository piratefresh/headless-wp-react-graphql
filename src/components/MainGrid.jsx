import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const GridWrapper = styled.div`
  width: 100%;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(110px, 330px));
  grid-auto-rows: minmax(110px, 330px);
  grid-auto-flow: dense;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(110px, 330px));
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;
const GridItem = styled.div`
  position: relative;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #009844;
  :hover {
    opacity: 1;
  }
`;
const TextContent = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  text-transform: uppercase;
`;

class MainGrid extends Component {
  state = {
    data: null
  };
  async componentDidMount() {
    const response = await fetch(
      `http://brewingsite.local/wp-json/acf/v3/media/13`
    );
    const json = await response.json();

    this.setState({ data: json.acf });
  }
  render() {
    const { data } = this.state;

    if (data) {
      const img1 = data.frontImg1;
      const img2 = data.frontImg2;
      const img3 = data.frontImg3;
      const img4 = data.frontImg4;

      return (
        <GridWrapper>
          <Grid>
            <GridItem className="span-2column">
              <img src={img1} alt="" srcset="" />
              <Overlay>
                <TextContent>
                  <p>hey</p>
                </TextContent>
              </Overlay>
            </GridItem>

            <GridItem>
              <img src={img2} alt="" srcset="" />
              <Overlay>
                <TextContent>
                  <p>hey</p>
                </TextContent>
              </Overlay>
            </GridItem>

            <GridItem>
              <img src={img3} alt="" srcset="" />
              <Overlay>
                <TextContent>
                  <p>hey</p>
                </TextContent>
              </Overlay>
            </GridItem>

            <GridItem>
              <img src={img4} alt="" srcset="" />
              <Overlay>
                <TextContent>
                  <p>hey</p>
                </TextContent>
              </Overlay>
            </GridItem>

            <GridItem>
              <img src={img1} alt="" srcset="" />
              <Overlay>
                <TextContent>
                  <p>hey</p>
                </TextContent>
              </Overlay>
            </GridItem>

            <GridItem>
              <img src={img2} alt="" srcset="" />
              <Overlay>
                <TextContent>
                  <p>hey</p>
                </TextContent>
              </Overlay>
            </GridItem>

            <GridItem className="span-2row">
              <img src={img3} alt="" srcset="" />
              <Overlay>
                <TextContent>
                  <p>hey</p>
                </TextContent>
              </Overlay>
            </GridItem>

            <GridItem>
              <img src={img4} alt="" srcset="" />
              <Overlay>
                <TextContent>
                  <p>hey</p>
                </TextContent>
              </Overlay>
            </GridItem>

            <GridItem>
              <img src={img1} alt="" srcset="" />
              <Overlay>
                <TextContent>
                  <p>hey</p>
                </TextContent>
              </Overlay>
            </GridItem>

            <GridItem>
              <img src={img2} alt="" srcset="" />
              <Overlay>
                <TextContent>
                  <p>hey</p>
                </TextContent>
              </Overlay>
            </GridItem>
          </Grid>
        </GridWrapper>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

export default withRouter(MainGrid);
