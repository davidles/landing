import { HeadContainer } from "./components/HeadContainer"
import { ImageComponent } from "./components/ImageComponent"
import { InfoConteiner } from "./components/InfoConteiner"
import { InfoText } from "./components/InfoText";
import detail1 from './assets/img/tech.png';
import detail2 from './assets/img/detail-2.png';
import { services } from './database/services.json'

import { CardInfo } from "./components/CardInfo";
import { CategoriesContainer } from "./components/CategoriesContainer";

import './App.css';

function App() {


  return (
    <div className="flex flex-col mt-20 ">
      <HeadContainer />

      <InfoConteiner>
        <div className="fade">
          <ImageComponent url={detail1} title={'detail-product-1'} />

        </div>
        <div className="fade">
          <InfoText title={services[0].title} description={services[0].description} />

        </div>
      </InfoConteiner>

      <CategoriesContainer />

      <InfoConteiner>
        <div className="fade">
          <InfoText title={services[1].title} description={services[1].description}>
            <CardInfo
              title={'nuestras ubicaciones'}
              data={'Alcoba 12, Sevilla, España 912 455 789'} />
          </InfoText>

        </div>

        <div className="fade">
          <ImageComponent url={detail2} alt={'detail-product-2'} />

        </div>
      </InfoConteiner>

      <InfoConteiner>
        <InfoText title={'Contacta con nosotros'} />
        <CardInfo
          title={'Oficina principal'}
          data={'Alcoba 12, Sevilla, España 912 455 789'} />
        <CardInfo
          title={'Redes sociales'}
          data={'Facebook Instagram Twitter'} />
      </InfoConteiner>

      <h4 className="text-white font-bold text-center my-20">hola@unsitiogenial.es</h4>

    </div>
  )
}

// function App() {


//   return (
//     <div className="flex flex-col mt-20 ">
//       <HeadContainer />

//       <InfoConteiner>
//         <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-700">
//          <ImageComponent url={detail1} title={'detail-product-1'} />

//         </div>
//         <div className="animate-fade-left animate-once animate-duration-1000 animate-delay-700">
//           <InfoText title={services[0].title} description={services[0].description} />

//         </div>
//       </InfoConteiner>

//       <CategoriesContainer />

//       <InfoConteiner>
//         <InfoText title={services[1].title} description={services[1].description}>
//           <CardInfo
//             title={'nuestras ubicaciones'}
//             data={'Alcoba 12, Sevilla, España 912 455 789'} />
//         </InfoText>
//         <ImageComponent url={detail2} alt={'detail-product-2'} />
//       </InfoConteiner>

//       <InfoConteiner>
//         <InfoText title={'Contacta con nosotros'} />
//         <CardInfo
//           title={'Oficina principal'}
//           data={'Alcoba 12, Sevilla, España 912 455 789'} />
//         <CardInfo
//           title={'Redes sociales'}
//           data={'Facebook Instagram Twitter'} />
//       </InfoConteiner>

//       <h4 className="text-white font-bold text-center my-20">hola@unsitiogenial.es</h4>

//     </div>
//   )
// }

export default App
