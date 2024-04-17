import DefaultImage from 'assets/images/img-1.png';
import Button from 'components/Button';
import ViewImage from 'components/ViewImage';

export default function HomeBannerItem() {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='flex items-start justify-start gap-10'>
        <div className='w-[540px] h-[412px]'>
          <ViewImage>
            <img
              src={DefaultImage}
              alt='product-image'
              width={540}
              height={412}
              className='w-[540px] h-[412px]'
            />
          </ViewImage>
        </div>

        <div className='max-w-[460px]'>
          <h1 className='text-7xl font-bold leading-snug mb-8'>
            Vegetable <span className='text-primary'>Shop</span>
          </h1>
          <p className='mb-12 leading-relaxed font-light tracking-wide'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem
          </p>
          <Button>Buy Now</Button>
          <Button className={"ml-5"} variant={'secondary'}>Read More</Button>
        </div>
      </div>
    </div>
  );
}
