import Carrot from 'assets/images/img-2.png';
import VegetablesList from 'components/HomeOurVegetables/VegetablesList';

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
      <h2 className='text-5xl leading-snug font-bold mt-1'>About Our Shop</h2>

      <p className='mt-2 leading-normal font-light text-center max-w-[520px]'>
        Reader will be distracted by the readable content of a
      </p>

      <div className='mt-20'><VegetablesList /></div>
    </div>
  );
}
