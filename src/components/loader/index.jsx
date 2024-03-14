import Gif from '../../assets/images/loader.svg'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
    <img src={Gif} />
    </div>
  )
}

export default Loader