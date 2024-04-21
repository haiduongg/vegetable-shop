import VegetableCard from 'components/VegetableCard';
import tomato from 'assets/images/img-4.png';
import PropTypes from 'prop-types'

VegetablesList.propTypes = {
  productData: PropTypes.array
}

export default function VegetablesList({productData}) {
  const vegetables = [
    {
      name: 'Tomato',
      image: tomato,
      price: 10,
      weight: 1,
      description: 'adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Tomato',
      image: tomato,
      price: 10,
      weight: 1,
      description: 'adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Tomato',
      image: tomato,
      price: 10,
      weight: 1,
      description: 'adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Tomato',
      image: tomato,
      price: 10,
      weight: 1,
      description: 'adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Tomato',
      image: tomato,
      price: 10,
      weight: 1,
      description: 'adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Tomato',
      image: tomato,
      price: 10,
      weight: 1,
      description: 'adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Tomato',
      image: tomato,
      price: 10,
      weight: 1,
      description: 'adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Tomato',
      image: tomato,
      price: 10,
      weight: 1,
      description: 'adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Tomato',
      image: tomato,
      price: 10,
      weight: 1,
      description: 'adipiscing elit, sed do eiusmod tempor',
    },
    {
      name: 'Tomato',
      image: tomato,
      price: 10,
      weight: 1,
      description: 'adipiscing elit, sed do eiusmod tempor',
    },
  ];

  const handleData = (productData) => {
    if (productData.length > 10) {
      return productData.splice(0, 10)
    }
    return productData
  }

  return (
    <>
      <ul className='grid grid-cols-5 gap-8'>
        {handleData(productData || vegetables)?.map((item, index) => (
            <li key={index}>
              <VegetableCard vegetable={item} />
            </li>
          ))}
      </ul>
    </>
  );
}
