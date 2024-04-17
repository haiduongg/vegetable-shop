import Carrot from 'assets/images/img-2.png';
import Cabbage from 'assets/images/img-3.png';
import ViewImage from 'components/ViewImage';
import Button from 'components/Button';

export default function HomeAboutOurShopSection() {
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
      <ViewImage>
        <img
          src={Cabbage}
          alt='cabbage-image'
          width={702}
          height={350}
          className='w-[702px] h-[350px] mt-20 mb-5'
        />
      </ViewImage>

      <p  className='leading-normal font-light text-center max-w-[520px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>

      <Button className={"mt-14"} variant={"secondary"}></Button>
    </div>
  );
}
