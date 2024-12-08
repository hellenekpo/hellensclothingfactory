import React from 'react'
import './Home.css';
import { useState } from 'react';
import styled from 'styled-components'
import { tablet, mobile, desktop } from './responsive';
import helene1 from './images/helene.png';
import helene2 from './images/heleneclick.png';
import catalog1 from './images/catalog1.png';
import catalog2 from './images/catalog2.png';
import about1 from './images/about1.png';
import about2 from './images/about2.png';
import contact1 from './images/contact1.png';
import contact2 from './images/contact2.png';
import * as AWS from 'aws-sdk';
import placeholder1 from './images/placeholder1.png'
import placeholder2 from './images/placeholder2.png'
import placeholder3 from './images/placeholder3.png'
import placeholder4 from './images/placeholder4.png'
import config from './config.json'
import { useNavigate} from 'react-router-dom';
AWS.config.update(config);
const docClient = new AWS.DynamoDB.DocumentClient();


const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Helene = styled.img`
  max-width:29%;
    max-height:100%;
  position:fixed;
  ${tablet({maxWidth:"60%",})}
  ${mobile({maxWidth:"60%",})}


`;
const AboutUs = styled.img`
  max-width:22%;
  max-height:20%;
  position:fixed;
  bottom: 0%;
  ${mobile({maxWidth:"70%", left:"0%", bottom:"1%"})}
  ${tablet({maxWidth:"70%", left:"0%", bottom:"2%"})}
  left:0%;
`;
const Contact = styled.img`
  max-width:18%;
  max-height:20%;
  position:fixed;
  bottom: 0%;
  ${mobile({maxWidth:"70%", left:"0%", bottom:"10%"})}
  ${tablet({maxWidth:"70%", left:"0%", bottom:"10%"})}

`;
const Catalog = styled.img`
  max-width:18%;
  max-height:20%;
  position:fixed;
  ${mobile({maxWidth:"70%", left:"0%", bottom:"18%"})}
  ${tablet({maxWidth:"70%", left:"0%", bottom:"18%"})}
  bottom: -0.9%;
  right:0%;
`;
const PortFolio= styled.div`
    ${tablet({paddingTop: "18%", display: "grid", height:"50%", width:"50%"})}
    ${mobile({paddingTop: "25%", display: "grid", height:"50%", width:"70%", justifyContent:"spaces"})}
    padding-top: 20%;
    display: flex;
    justify-content: space-between;
`;
const Poster = styled.img`
    width: 30%;
    height: 100%;
    ${tablet({width: "90%", height: "90%", marginLeft:"0%",})}
    ${mobile({width: "90%", height: "90%", marginLeft:"20%",})}
    display: block;
    margin-right: auto;
    margin-left: auto;
`;


const Shop = () => {
	const [purchases, setPurchases] = useState(-1);
	const navigate = useNavigate();
const changeOnHover = (image) => {
    if (image === "aboutUs") {
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
}
const changeOnMouseOut = (image) => {
    if (image === "aboutUs") {
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
}
    const changeToPlaceHolder1 = (placeHolder) => {
        if (placeHolder === "placeFirstImage" ||
            placeHolder === "placeThirdImage" ||
            placeHolder === "placeFifthImage" ||
            placeHolder === "placeSeventhImage" ||
            placeHolder === "placeNinthImage") {
            document.getElementById(placeHolder).src = placeholder1;
        }
        else {
            document.getElementById(placeHolder).src = placeholder3;
        }
    }
    const changeToPlaceHolder2 = (placeHolder) => {
        if (placeHolder === "placeFirstImage" ||
            placeHolder === "placeThirdImage" ||
            placeHolder === "placeFifthImage" ||
            placeHolder === "placeSeventhImage" ||
            placeHolder === "placeNinthImage") {
            document.getElementById(placeHolder).src = placeholder2;
        }
        else {
            document.getElementById(placeHolder).src = placeholder4;
        }
    }
	const fetchData = (tableName) => {
    var params = {
        TableName: tableName
    }
	console.log("in here")
    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data);
			for (let i = 0; i < data.Count; ++i) {
				if (data.Items[i].id = "1") {
					setPurchases(data.Items[i].num_of_purchases)
				}
			}
			console.log("This is purchases", purchases);
        }
		console.log(err);
    })
	}
	
	const fetchItem = () => {
		docClient.get({
    		TableName: "clothingitems",
    		Key: {
      			id: "1", // id is the Partition Key, '123' is the value of it
				name: "bubblegumblush"
    		},
  		})
  		.promise()
  		.then(data => console.log(data.Item))
  		.catch(console.error)
	}
	const updatePurchases = (tableName, id, productName) => {
		let newnew = purchases + 1
		var params = {
			TableName: tableName,
			Key: {
				id: id,
				name: productName
			},
			UpdateExpression: `set num_of_purchases = :np + :value`,
			ExpressionAttributeValues: {
				":value": 1,
				":np": purchases,
    		},
		}
		setPurchases(newnew);
		docClient.update(params, function (err, data) {
			if (!err) {
				return "Successfully purchased";
			}
			console.log(err);
		})
	}
  return (
    <Container>
    <Helene src={helene1} onClick={() => {navigate('/');}}
            onMouseOver={() => {changeOnHover("helene");}}
            onMouseOut={() => {changeOnMouseOut("helene");}}
            alt="logo" id="helene"/>
    <PortFolio>
        <Poster src={placeholder1} id="placeFirstImage" alt="poster"
                onClick={() => {navigate('/shop/1');}}
                // onMouseOver={() => {changeToPlaceHolder2("placeFirstImage");}}
                // onMouseOut={() => {changeToPlaceHolder1("placeFirstImage");}}
        />
        <Poster src={placeholder1} id="placeThirdImage" alt="poster"
                onClick={() => {navigate('/shop/3');}}
                // onMouseOver={() => {changeToPlaceHolder2("placeThirdImage");}}
                // onMouseOut={() => {changeToPlaceHolder1("placeThirdImage");}}
        />
        <Poster src={placeholder1} id="placeThirdImage" alt="poster"
                onClick={() => {navigate('/shop/3');}}
            // onMouseOver={() => {changeToPlaceHolder2("placeThirdImage");}}
            // onMouseOut={() => {changeToPlaceHolder1("placeThirdImage");}}
        />
    </PortFolio>

    <AboutUs src={about1}
             onClick={() => {navigate('/aboutUsInfo');}}
             alt="aboutus"
             onMouseOver={() => {changeOnHover("aboutUs");}}
             onMouseOut={() => {changeOnMouseOut("aboutUs");}}
             id="aboutUs"/>
    <Contact src={contact1} onClick={() => {navigate('/contact');}}
             onMouseOver={() => {changeOnHover("contact");}}
             onMouseOut={() => {changeOnMouseOut("contact");}}
             alt="contacting"
             id="contact"/>
    <Catalog src={catalog1} onClick={() => {navigate('/catalog');}}
             onMouseOver={() => {changeOnHover("catalog");}}
             onMouseOut={() => {changeOnMouseOut("catalog");}}
             alt="catalogging"
             id="catalog"/>
    </Container>
  )
}

export default Shop