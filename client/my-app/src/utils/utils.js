import styled from "styled-components";
import {desktop, mobile, tablet} from "./responsive";
import about2 from "../images/about2.png";
import contact2 from "../images/contact2.png";
import catalog2 from "../images/catalog2.png";
import helene2 from "../images/heleneclick.png";
import about1 from "../images/about1.png";
import contact1 from "../images/contact1.png";
import catalog1 from "../images/catalog1.png";
import helene1 from "../images/helene.png";
import play from "../images/play.png";
import pause from "../images/pause.png";
import playdark from "../images/playdark.png";
import pausedark from "../images/pausedark.png";
import placeholder1 from "../images/placeholder1.png";
import placeholder2 from "../images/placeholder2.png";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const PortFolio= styled.div`
    ${tablet({paddingTop: "18%", display: "grid", height:"100%", width:"100%"})}
    ${mobile({paddingTop: "55%", height:"200%", width:"250%", marginLeft:"150%"})}
    padding-top: 20%;
    display: flex;
    justify-content: space-between;
`;

export const Poster = styled.img`
    width: 30%;
    height: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
`;

export const changeOnHover = (image, isPlaying = null) => {
    if (image === "about") {
        document.getElementById(image).src = about2;
    }
    if (image === "contact") {
        document.getElementById(image).src = contact2;
    }
    if (image === "catalog") {
        document.getElementById(image).src = catalog2;
    }
    if (image === "helene") {
        document.getElementById(image).src = helene2;
    }
    if (image === "playButton") {
        if (isPlaying) {
            document.getElementById(image).src = pausedark;
        }
        else if (!isPlaying) {
            document.getElementById(image).src = playdark;
        }
    }
}
// if not playing
// on hover change to bright play color
// on mouse down change to bright play color
// on mouse up change to pause

// if playing
// on hover change to bright pause color
// on mouse down change to bright pause color
// on mouse up change to play

export const changeOnMouseUp = (image, isPlaying) => {
    if (image === "playButton") {
        if (isPlaying) {
            document.getElementById(image).src = play;
        }
        if (!isPlaying) {
            document.getElementById(image).src = pause;
        }
    }

}

export const changeOnMouseDown = (image, isPlaying) => {
    if (image === "playButton") {
        if (isPlaying) {
            document.getElementById(image).src = pausedark;
        }
        if (!isPlaying) {
            document.getElementById(image).src = playdark;
        }
    }

}

export const changeOnMouseOut = (image, isPlaying = null) => {
    if (image === "about") {
        document.getElementById(image).src = about1;
    }
    if (image === "contact") {
        document.getElementById(image).src = contact1;
    }
    if (image === "catalog") {
        document.getElementById(image).src = catalog1;
    }
    if (image === "helene") {
        document.getElementById(image).src = helene1;
    }
    if (image === "playButton") {
        if (isPlaying) {
            document.getElementById(image).src = pause;
        }
        else if (!isPlaying) {
            document.getElementById(image).src = play;
        }
    }
}

export const Drop = styled.img`
    max-width: 0%;
    max-height: 100%;
    position: fixed;
    ${desktop({ maxWidth: '0', top: '22%' })}
    ${mobile({ maxWidth: '85%', top: '10%' })}
    ${tablet({ maxWidth: '85%', top: '10%' })}
    top: 40%;
`;

export const DropDesktop = styled.img`
  max-width: 80%;
  max-height: 100%;
  position: fixed;
  ${desktop({ maxWidth: '100%' })}
  ${mobile({ maxWidth: '0%' })}
  ${tablet({ maxWidth: '0%' })}
  top: 8%;
`;
export const changeToPlaceHolder1 = (placeHolder) => {
    document.getElementById(placeHolder).src = placeholder1;
};

export const changeToPlaceHolder2 = (placeHolder) => {
    document.getElementById(placeHolder).src = placeholder2;
};


export const MusicPlayer = styled.img`
    ${mobile({bottom: 10, right: 10})}
    ${tablet({bottom: 10, right: 10 })}
    ${desktop({left: 10, top: 10})}
    height: 80px;
    width: 80px;
    right: 0;
    position: fixed;
`;

export const FormLabel = styled.img`
    ${mobile({left: 0, top: 20})}
    ${tablet({})}
    ${desktop({})}
    height: 30px;
    width: 110px;
    position: relative;
`;



