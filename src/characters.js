import React, { useEffect, useState } from "react";
import axios from 'axios';
//import '../App.css';





const Characters = () => {



        const [Data, setData] = useState({
            name: '',
            title: '',
            species: '',
            gender: '',
            actor: '',
            picture: ''
          
       
        })

        useEffect(() => {
          axios.get('https://vampire-diaries-api.fly.dev/characters')
            .then(res => {
                //making random character thing
                var randomNum= Math.floor(Math.random()*res.data.length) 
                console.log(randomNum)
                var CharNum = randomNum; 
                console.log(CharNum);

                var specNum = res.data[CharNum].species.length
                console.log(specNum); 
              
                console.log('Response from main API: ', res) // All info
                console.log('Characters Data: ', res.data) // just the data 
             
            
          
              setData({ 
                name: res.data[CharNum].name,
                title: res.data[CharNum].title,
                species: res.data[CharNum].species,
                gender: res.data[CharNum].gender, 
                actor: res.data[CharNum].actor,
                picture: res.data[CharNum].picture
                  
               });
               
          
              })

            

            .catch(err => {
              console.log(err);
            })
        }, [])
      
        return (
        <div>
            
            <h1>{'Name: ' + Data.name}</h1>
            <h1>{'Titles: '+ Data.title}</h1>
            <h1>{'Species: '+Data.species}</h1>
            <h1>{'Gender: ' +Data.gender}</h1>
            <h1>{'Actor: ' + Data.actor}</h1>
            



            {/* <img 
              src={Data.picture} 
              width = "450" 
              height = "450" 
              alt={Data.name} /> */}
        </div>


        );


      } 

     


export default Characters; 