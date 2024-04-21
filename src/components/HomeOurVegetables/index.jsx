import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import productApi from 'api/productApi';
import Button from 'components/Button';
import Carrot from 'assets/images/img-2.png';
import VegetablesList from 'components/HomeOurVegetables/VegetablesList';

export default function OurVegetables() {
  const [productData,setProductData] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
			try {
				const params = {};
				const response = await productApi.getAll(params);
        setProductData(response.data)
			} catch (error) {
				console.log('Failed to fetch product list', error);
			}
		};

    fetchProductList();
  },[])

  return (
    <div className='flex flex-col items-center justify-center'>
      <img
        src={Carrot}
        alt='carrot-image'
        width={57}
        height={57}
        className='w-[57px] h-[57px]'
      />
      <h2 className='text-5xl leading-snug font-bold mt-1'>Our Vegetables</h2>

      <p className='mt-2 leading-normal font-light text-center max-w-[550px]'>
        Reader will be distracted by the readable content of a vegetables
      </p>

      <div className='mt-24'>
        <VegetablesList productData={productData}/>
      </div>

      <Button className={'mt-14'} variant={'secondary'}>
        <Link
          to={'/shop'}
          className='inline-grid w-full h-full place-items-center'
        >
          Read More
        </Link>
      </Button>
    </div>
  );
}
