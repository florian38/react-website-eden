import React, {useState, useEffect} from 'react'

import jacuzzi from '../../assets/eden/jacuzzi.jpg'
import balançoire from '../../assets/eden/balançoire.jpg'
import room from '../../assets/eden/room.jpg'
import cocon from '../../assets/eden/cocon.jpg'
import fauteuil from '../../assets/eden/fauteuil.jpg'

import cuisine from '../../assets/hutte/cuisine.png'
import chambre from '../../assets/hutte/chambre.png'
import douche from '../../assets/hutte/douche.jpg'
import mur from '../../assets/hutte/mur.jpg'
import chemine from '../../assets/hutte/chemine.jpg'

import './Accordeon.css'

export default function Accordeon({site}) {

    const eden = [
        { img : jacuzzi, title : 'SPA' , text : 'Pour une ambiance reposante et étoilée'},
        { img : balançoire, title : 'Balançoire' , text : 'Pour une récréation sensuelle'},
        { img : room, title : 'Nid' , text : 'Pour une nuit pleine de tendresse'},
        { img : cocon, title : 'Cocon' , text : 'Atmosphère romantique au coin du feu'},
        { img : fauteuil, title : 'Salon tantrique' , text : 'Paradis dédié à la volupté'}
    ]

    const hutte = [
        { img : cuisine, title : 'Cuisine' , text : 'Pour des inspirations culinaires.'},
        { img : chambre, title : 'Nid' , text : 'Sur un lit suspendu sous un ciel en miroir'},
        { img : douche, title : 'Douche' , text : 'Au milieu de la forêt'},
        { img : mur, title : 'Mur' , text : 'Chant des singes hurleurs et éffluves tropicales'},
        { img : chemine, title : 'Cheminé' , text : 'Sous la chaleur tropical'}
    ]

    const [tabImg, setTab] = useState(eden)

    useEffect(() => {
        if(site === 'eden'){
            setTab(eden)
        } else {
            setTab(hutte)
        }
    }, [])

    return (
    
    <div className="accordeon">

        <div className="item f1" style={{ backgroundImage: `url(${tabImg[0].img})` }}>
            <div className="text-container">
                <h3 className='titleAcc'>{tabImg[0].title}</h3>
                <p className='messageAcc'>{tabImg[0].text}</p>
            </div>
        </div>

        <div className="item f2" style={{ backgroundImage: `url(${tabImg[1].img})` }}>
            <div className="text-container">
                <h3 className='titleAcc'>{tabImg[1].title}</h3>
                <p className='messageAcc'>{tabImg[1].text}</p>
            </div>

        </div>

        <div className="item f3" style={{ backgroundImage: `url(${tabImg[2].img})` }}>
            <div className="text-container">
                <h3 className='titleAcc'>{tabImg[2].title}</h3>
                <p className='messageAcc'>{tabImg[2].text}</p>
            </div>
        </div>

        <div className="item f4" style={{ backgroundImage: `url(${tabImg[3].img})` }}>
            <div className="text-container">
                <h3 className='titleAcc'>{tabImg[3].title}</h3>
                <p className='messageAcc'>{tabImg[3].text}</p>
            </div>
        </div>

        <div className="item f5" style={{ backgroundImage: `url(${tabImg[4].img})` }}>
            <div className="text-container">
                <h3 className='titleAcc'>{tabImg[4].title}</h3>
                <p className='messageAcc'>{tabImg[4].text}</p>
            </div>
        </div>
    </div>
  )
}
