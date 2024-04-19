import Carrot from 'assets/images/img-2.png';
import Cabbage from 'assets/images/img-14.png';
import ViewImage from 'components/ViewImage';
import Button from 'components/Button';

export default function WhyChooseUs() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img
        src={Carrot}
        alt='carrot-image'
        width={57}
        height={57}
        className='w-[57px] h-[57px]'
      />
      <h2 className='text-5xl leading-snug font-bold mt-1'>Why Choose Us</h2>
      <ViewImage>
        <img
          src={Cabbage}
          alt='cabbage-image'
          width={962}
          height={189}
          className='w-[962px] h-[189px] mt-20 mb-5'
        />
      </ViewImage>

      <p  className='leading-normal font-light text-center max-w-[520px]'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>

      <Button className={"mt-14"} variant={"secondary"}></Button>
    </div>
  );
}
