import Carrot from 'assets/images/img-2.png';
import Button from 'components/Button';
import VegetablesList from 'components/HomeOurVegetables/VegetablesList';
import { Link } from 'react-router-dom';

export default function OurVegetables() {
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
        <VegetablesList />
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
