import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          Special
          <span className='text-coral-red '> Offer </span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
        </p>
        <p className='mt-6 lf:max-w-lg info-text'>
          Molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
          nulla pariatur
        </p>
        <div className='flex flex-wrap gap-4'>
          <Button label='Shop Now' iconURL={arrowRight} />
          <Button
            label='Learn More'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
