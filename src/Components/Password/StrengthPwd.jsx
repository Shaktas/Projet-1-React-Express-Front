function StrengthPwd(strength) {
  switch (strength.strength) {
    case 0:
      return (
        <>
          <div className="mx-1 bg-red-500 h-7 w-3 border-solid border-2 border-red-500 rounded-3xl"></div>
          <div className="mx-1 bg-blue-1 h-7 w-3 border-solid border-2 border-blue-9 rounded-3xl"></div>
          <div className="mx-1 bg-blue-1 h-7 w-3 border-solid border-2 border-blue-9 rounded-3xl"></div>
          <div className="mx-1 bg-blue-1 h-7 w-3 border-solid border-2 border-blue-9 rounded-3xl"></div>
          <div className="mx-1 bg-blue-1 h-7 w-3 border-solid border-2 border-blue-9 rounded-3xl"></div>
        </>
      );
    case 1:
    case 2:
      return (
        <>
          <div className="mx-1 bg-red-300 h-7 w-3 border-solid border-2 border-red-300 rounded-3xl"></div>
          <div className="mx-1 bg-red-300 h-7 w-3 border-solid border-2 border-red-300 rounded-3xl"></div>
          <div className="mx-1 bg-blue-1 h-7 w-3 border-solid border-2 border-blue-9 rounded-3xl"></div>
          <div className="mx-1 bg-blue-1 h-7 w-3 border-solid border-2 border-blue-9 rounded-3xl"></div>
          <div className="mx-1 bg-blue-1 h-7 w-3 border-solid border-2 border-blue-9 rounded-3xl"></div>
        </>
      );

    case 3:
      return (
        <>
          <div className="mx-1 bg-orange-500 h-7 w-3 border-solid border-2 border-orange-500 rounded-3xl"></div>
          <div className="mx-1 bg-orange-500 h-7 w-3 border-solid border-2 border-orange-500 rounded-3xl"></div>
          <div className="mx-1 bg-orange-500 h-7 w-3 border-solid border-2 border-orange-500 rounded-3xl"></div>
          <div className="mx-1 bg-blue-1 h-7 w-3 border-solid border-2 border-blue-9 rounded-3xl"></div>
          <div className="mx-1 bg-blue-1 h-7 w-3 border-solid border-2 border-blue-9 rounded-3xl"></div>
        </>
      );
    case 4:
    case 5:
      return (
        <>
          <div className="mx-1 bg-green-300 h-7 w-3 border-solid border-2 border-green-300 rounded-3xl"></div>
          <div className="mx-1 bg-green-300 h-7 w-3 border-solid border-2 border-green-300 rounded-3xl"></div>
          <div className="mx-1 bg-green-300 h-7 w-3 border-solid border-2 border-green-300 rounded-3xl"></div>
          <div className="mx-1 bg-green-300 h-7 w-3 border-solid border-2 border-green-300 rounded-3xl"></div>
          <div className="mx-1 bg-blue-1 h-7 w-3 border-solid border-2 border-blue-9 rounded-3xl"></div>
        </>
      );
    case 6:
      return (
        <>
          <div className="mx-1 bg-green-500 h-7 w-3 border-solid border-2 border-green-500 rounded-3xl"></div>
          <div className="mx-1 bg-green-500 h-7 w-3 border-solid border-2 border-green-500 rounded-3xl"></div>
          <div className="mx-1 bg-green-500 h-7 w-3 border-solid border-2 border-green-500 rounded-3xl"></div>
          <div className="mx-1 bg-green-500 h-7 w-3 border-solid border-2 border-green-500 rounded-3xl"></div>
          <div className="mx-1 bg-green-500 h-7 w-3 border-solid border-2 border-green-500 rounded-3xl"></div>
        </>
      );

    default:
      break;
  }
}

export default StrengthPwd;
