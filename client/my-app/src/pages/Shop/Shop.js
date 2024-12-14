import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import { PortFolio, Poster,  PageContainer } from '../../Utils/Utils';
import placeholder1 from '../../images/placeholder1.png';
import placeholder2 from '../../images/placeholder2.png';

const Shop = () => {
  const [purchases, setPurchases] = useState(-1);
  const navigate = useNavigate();

  const changeToPlaceHolder1 = (placeHolder) => {
    document.getElementById(placeHolder).src = placeholder1;
  };

  const changeToPlaceHolder2 = (placeHolder) => {
    document.getElementById(placeHolder).src = placeholder2;
  };

  return (
    <PageContainer>
      <GlobalHeader />
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
      <GlobalFooter />
    </PageContainer>
  );
};

export default Shop;