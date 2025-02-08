import React from 'react'
import Card from "../LongTerm/Card";


const ShortTerm = () => {
    return (
        <div>
            <Card
                imageUrl='/src/assets/cardPlaceHolder2.jpg'
                name='Cozy Cabin'
                avaibility='Availible!!!'
                propertyTitle='Cozy Cabin'
                bedNum={3}
                bathNum={5}
                sleepNum={10}
                sqfeetNum={2700}
                mapLink='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093666!2d144.95373631584445!3d-37.81627944202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774c48cb2f0b87!2sFlinders+Street+Station!5e0!3m2!1sen!2sus!4v1618185171101!5m2!1sen!2sus'
                rating={4.82}
                airbnbLink='https://www.airbnb.ca/'
                dates='Mar 24-29'
                price={399}
            />
            
            <Card
                imageUrl='/src/assets/cardPlaceHolder3.jpeg'
                name='Lake Ontario Cottage'
                avaibility='Availible!!!'
                propertyTitle='Lake Ontario Cottage'
                bedNum={3}
                bathNum={5}
                sleepNum={10}
                sqfeetNum={3900}
                mapLink='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093666!2d144.95373631584445!3d-37.81627944202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774c48cb2f0b87!2sFlinders+Street+Station!5e0!3m2!1sen!2sus!4v1618185171101!5m2!1sen!2sus'
                rating={4.14}
                airbnbLink='https://www.airbnb.ca/'
                dates='Mar 24-29'
                price={561}
            />
            </div>


    )
}

export default ShortTerm