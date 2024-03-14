
const ErrorScreen = ({ error }) => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="text-xl text-center md:text-4xl text-[#aa3535]">{error}, Check network connection and refresh</div>
    </div>
  );
};

export default ErrorScreen;
