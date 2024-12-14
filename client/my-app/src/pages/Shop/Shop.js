import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import { PortFolio, Poster,  PageContainer } from '../../utils/utils';
import placeholdergif from '../../images/rotateplaceholder.gif';
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
        <Helmet>
            <title>helene</title>
            <link rel="icon" href="%PUBLIC_URL%/newlogo.png"/>
            <meta property="og:image"
                  content="https://raw.githubusercontent.com/hellenekpo/hellensclothingfactory/refs/heads/master/client/my-app/public/helene.png"/>
            <meta property="og:image:secure_url"
                  content="https://raw.githubusercontent.com/hellenekpo/hellensclothingfactory/refs/heads/master/client/my-app/public/helene.png"/>
            <meta name="twitter:image"
                  content="https://raw.githubusercontent.com/hellenekpo/hellensclothingfactory/refs/heads/master/client/my-app/public/helene.png"/>
            <meta name="twitter:title" content="helene shop."/>

        </Helmet>
        <GlobalHeader/>
        <PortFolio>
        <Poster
                src={placeholdergif}
                id="placeFirstImage"
                alt="poster"
                onClick={() => navigate('/shop/1')}
                //onMouseOver={() => changeToPlaceHolder2('placeFirstImage')}
                //onMouseOut={() => changeToPlaceHolder1('placeFirstImage')}
            />
        <Poster
          src={placeholdergif}
          id="placeSecondImage"
          alt="poster"
          onClick={() => navigate('/shop/2')}
          //onMouseOver={() => changeToPlaceHolder2('placeSecondImage')}
          //onMouseOut={() => changeToPlaceHolder1('placeSecondImage')}
        />
        <Poster
          src={placeholdergif}
          id="placeThirdImage"
          alt="poster"
          onClick={() => navigate('/shop/3')}
          //onMouseOver={() => changeToPlaceHolder2('placeThirdImage')}
          //onMouseOut={() => changeToPlaceHolder1('placeThirdImage')}
        />
      </PortFolio>
      <GlobalFooter />
    </PageContainer>
  );
};

export default Shop;