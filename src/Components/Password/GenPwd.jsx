import CopySvg from "../../assets/CopySvg";

function GenPwd() {
  return (
    <>
      <div className="my-10">
        <h1 className="text-blue-12 text-2xl">Générateur de mots de passe</h1>
      </div>
      <div className="flex justify-center w-2/3 h-5/6 bg-blue-5 shadow-lg rounded-3xl">
        <div className="w-2/3">
          <p className="mt-10 h-7 bg-blue-8 text-blue-12 w-full rounded-3xl indent-5">
            <CopySvg height="20" width="20" />
          </p>
          <div className="flex justify-center mt-5">
            <p className="text-blue-12 ml-4"></p>
            <div className="flex ms-1"></div>
          </div>
          <div className="mt-6 flex content-center text-blue-12"></div>
        </div>
      </div>
    </>
  );
}

export default GenPwd;
