import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import {
    PortFolio,
    Poster,
    PageContainer, changeToPlaceHolder2, changeToPlaceHolder1
} from '../../utils/utils';
import placeholder1 from '../../images/placeholder1.png';
import {MusicPlayerButton} from "../../components/MusicPlayer/MusicPlayerButton";

const Shop = () => {
  const navigate = useNavigate();
  return (
      <PageContainer>
          <GlobalHeader/>
          <MusicPlayerButton  />
          <PortFolio>
              <Poster
                  src={placeholder1}
                  id="placeFirstImage"
                  alt="poster"
                  onClick={() => navigate('/shop/1')}
                  onMouseOver={() => changeToPlaceHolder2('placeFirstImage')}
                  onMouseOut={() => changeToPlaceHolder1('placeFirstImage')}
              />
              <Poster
                  src={placeholder1}
                  id="placeSecondImage"
                  alt="poster"
                  onClick={() => navigate('/shop/2')}
                  onMouseOver={() => changeToPlaceHolder2('placeSecondImage')}
                  onMouseOut={() => changeToPlaceHolder1('placeSecondImage')}
              />
              <Poster
                  src={placeholder1}
                  id="placeThirdImage"
                  alt="poster"
                  onClick={() => navigate('/shop/3')}
                  onMouseOver={() => changeToPlaceHolder2('placeThirdImage')}
                  onMouseOut={() => changeToPlaceHolder1('placeThirdImage')}
              />
          </PortFolio>
          <GlobalFooter/>
      </PageContainer>
  );
};

export default Shop;