import PropTypes from "prop-types";

function CustomPwd({ sentenceCustom, setSentenceCustomHandler }) {
  return (
    <div className="">
      <label htmlFor="sentenceCustom" className="block font-bold mb-2">
        Choisissez une phrase que vous retiendrez facilement :
      </label>
      <textarea
        name="sentenceCustom"
        id="sentenceCustom"
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline resize-none min-h-[100px]"
        value={sentenceCustom}
        onChange={setSentenceCustomHandler}
      />
    </div>
  );
}

export default CustomPwd;

CustomPwd.propTypes = {
  sentenceCustom: PropTypes.string,
  setSentenceCustomHandler: PropTypes.func,
};
