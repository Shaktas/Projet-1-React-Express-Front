function ClickButton({ value, setPwdHandler }) {
  return (
    <input
      type="button"
      role="button"
      onClick={setPwdHandler}
      value={value}
      className="bg-blue-10 border-none text-blue-5 py-1 px-4 text-center no-underline inline-block text-lg m-1 cursor-pointer rounded-lg hover:bg-blue-11"
    />
  );
}

export default ClickButton;
