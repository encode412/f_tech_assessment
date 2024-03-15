import Gif from '../../assets/images/loader.svg'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[90vh] md:h-[100vh]" data-testid='loading-spinner'>
    <img src={Gif} className='md:w-[10%] w-[30%]' />
    </div>
  )
}

export default Loader