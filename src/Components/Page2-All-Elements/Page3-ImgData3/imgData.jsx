import React from 'react'
import DashComponent from '../../Elements-2/ImageData/ImageData'

const imgData3 = () => {
  return (
    <div>
      <DashComponent
        DashImage={
          "https://media.dash.org/wp-content/uploads/join-community.svg"
        }
        DashText={"Connect, learn, create."}
        DashParagraph={
          "Be a part of something bigger, get involved with meetups, learn from others, and take ownership in Dash’s future."
        }
        btn1={"View Now"}
        btn2={"Learn More"}
      />
    </div>
  );
}

export default imgData3