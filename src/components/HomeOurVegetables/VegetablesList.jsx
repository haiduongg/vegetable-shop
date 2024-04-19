import VegetableCard from 'components/VegetableCard';
import tomato from 'assets/images/img-4.png';

export default function VegetablesList() {
  const vegetables = [
    {
      name: "Tomato",
      image: tomato,
      price: 10,
      weight: 1,
      description: "adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "Tomato",
      image: tomato,
      price: 10,
      weight: 1,
      description: "adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "Tomato",
      image: tomato,
      price: 10,
      weight: 1,
      description: "adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "Tomato",
      image: tomato,
      price: 10,
      weight: 1,
      description: "adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "Tomato",
      image: tomato,
      price: 10,
      weight: 1,
      description: "adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "Tomato",
      image: tomato,
      price: 10,
      weight: 1,
      description: "adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "Tomato",
      image: tomato,
      price: 10,
      weight: 1,
      description: "adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "Tomato",
      image: tomato,
      price: 10,
      weight: 1,
      description: "adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "Tomato",
      image: tomato,
      price: 10,
      weight: 1,
      description: "adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "Tomato",
      image: tomato,
      price: 10,
      weight: 1,
      description: "adipiscing elit, sed do eiusmod tempor",
    },
  ]

  return (
    <>
      <ul className='grid grid-cols-5 gap-8'>
        {vegetables.splice(0,10)?.map((item,index)=>(
          <li key={index}><VegetableCard vegetable={item}/></li>
        ))}
      </ul>
    </>
  );
}
