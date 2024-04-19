import PropTypes from 'prop-types';
import Button from 'components/Button';

VegetableCard.propTypes = {
  vegetable: PropTypes.object.isRequired,
};

export default function VegetableCard({vegetable}) {
  return (
    <div className='w-[196px] h-fit border-dotted border-[#252525] border-[2px] py-5 px-3 flex flex-col items-center justify-center hover:shadow-2xl hover:border-black duration-300 transition'>
      <div className='w-full grid place-items-center'>
        <img src={vegetable.image} alt={'vegetable-image'} />
      </div>
      <div className='flex flex-col items-center justify-center my-3 text-xl font-bold leading-relaxed '>
        <p>
          $<span className='text-primary'>10</span>
        </p>
        <p>Tomato</p>
        <p className='text-primary'>1 kg</p>
      </div>
      <p className='text-center font-light opacity-90'>adipiscing elit, sed do eiusmod tempor</p>

      <Button className={"mt-6 rounded-md hover:shadow-lg duration-300 transition-shadow"} width={"130px"} variant={"secondary"}>Buy Now</Button>
    </div>
  );
}
