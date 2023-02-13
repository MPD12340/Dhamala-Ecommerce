import Product from './Product'
import { useGlobalContext } from '../context/UserContext'


const FeatureProduct = () => {
const {isLoading , featureProducts} = useGlobalContext()

if(isLoading){
    return <div>.....LOading</div>
}

  return (
    <>
      <section className="feature-section">
        <div className="feature-intro">
          <p>Check now !</p>
          <h2>Our latest products</h2>
        </div>
        <div className='feature-products'>
            {featureProducts.map((item)=><Product key={item.id} elem = {item} />)}
        </div>
      </section>
    </>
  );
}

export default FeatureProduct