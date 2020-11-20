
import React from "react"
import RewardItem from '../components/RewardItem'


const Rewards = () => {
    return (


        <div>
            <p style={{margin:20, fontSize:20, font:'bold'}} >Your Points: 25000</p>
            <RewardItem title="Super Awesome Bicycle" text="50000" imagesrc="https://mec.imgix.net/medias/sys_master/high-res/high-res/8872371388446/5051244-BK052.jpg?w=600&h=600&auto=format&q=60&fit=fill&bg=FFF"/>   
            <RewardItem title="The Greatest Toaster Ever" text="10000" imagesrc="https://images-na.ssl-images-amazon.com/images/I/71t8AKzrInL._AC_SX522_.jpg"/>   
            <RewardItem title="Rubber Duck" text="990000" imagesrc="https://images-na.ssl-images-amazon.com/images/I/71LgxJzwFKL._AC_SL1500_.jpg"/>   

        </div>
    )
}

export default Rewards