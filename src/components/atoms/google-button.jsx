import GoogleIcon from "./google-icon";

const GoogleButton = ({ children = "Masuk dengan Google" }) => {
  return (
    <button 
      type="button"
      className="
        w-full px-4 py-3 rounded-full border border-white/20 bg-white/10
        text-sm text-white
        hover:bg-white/20 transition flex flex-row justify-center items-center gap-5"
      onClick={() => alert("Login Google belum dikembangkan")}
    >
      <GoogleIcon />
      { children }
    </button>
  );
};

export default GoogleButton;
