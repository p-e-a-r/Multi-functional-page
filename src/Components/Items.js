import Miley from '../Images/Miley.jpg'
import Dawid from '../Images/Dawid.jpg'
import Mark from  '../Images/Mark.jpg'
import Tshirt from '../Images/Tshirt.jpg'
import Bag from '../Images/Bag.jpg'
import Jumper from '../Images/Jumper.jpg'
import Ibanez from '../Images/Ibanez.jpg'
import Gibson from '../Images/Gibson.jpg'
import Fender from '../Images/Fender.jpg'



export const items = [
    {
        category: "Instruments",
            products: [ {
                id: 1,
                itemName:"Gibson",
                img:{Gibson},
                price:"$2000",
                description: "Most overpriced guitar ever. Get it now"
            }, 
            {
                id: 2,
                itemName:"Fender",
                img:{Fender},
                price:"&1600",
                description: "Dad blues era icon. A classic."
            },
            {
                id: 3,
                itemName:"Ibanez",
                img:{Ibanez},
                price:"$700",
                description: "New generation doesn't know real music. Make your parents angry now!"
            } 
        ],
        category : "Music",
            products: [ {
                id: 4,
                itemName:"Mark Knopfler",
                img:{Mark},
                price:"$15",
                description: "Money for nothing and your chicks for free"
            }, 
            {
                id: 5,
                itemName:"Miley Cyrus",
                img:{Miley},
                price:"$20",
                description: "That album hit me like a wrecking ball! - The Rolling Stone"
            },
            {
                id: 6,
                itemName:"Dawid Podsiadło",
                img:{Dawid},
                price:"$10",
                description: "Top 10 szant wszechczasów"
            } 
        ],
        category: "Merch",
            products: [ {
                id: 7,
                itemName:"T-shirt",
                img:{Tshirt},
                price:"$40",
                description: "Best fitting Loprem ipsum homo sum emomum"
            }, 
            {
                id: 8,
                itemName:"Bag",
                img:{Bag},
                price:"$20",
                description: "Fit all groceries and more"
            },
            {
                id: 9,
                itemName:"Jumper",
                img:{Jumper},
                price:"$70",
                description: "Alpaca linen keeps you worm"
            } 
        ],
    }
]

