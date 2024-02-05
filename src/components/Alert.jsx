const Alert = ({ type, text }) => {
  return (
    <div className='absolute bottom-6 right-1 flex justify-center items-center'>
      <div
        className={`p-2 ${
          type === "danger" ? "bg-red-200" : "bg-emerald-200"
        } items-center text-slate-800 leading-none lg:rounded-full flex lg:inline-flex`}
        role='alert'
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-emerald-600"
          } uppercase px-2 py-1 text-white text-xs font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className='mr-2 text-left'>{text}</p>
      </div>
    </div>
  );
};

export default Alert;