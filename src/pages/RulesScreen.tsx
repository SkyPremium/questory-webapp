import rulesImage from "@/assets/images/rules.jpg";

export default function RulesScreen() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${rulesImage})` }}
    >
      {/* Галочка */}
      <input
        type="checkbox"
        checked={agreed}
        onChange={() => setAgreed(!agreed)}
        className="absolute"
        style={{
          left: "10%",   // отрегулируй по своей картинке
          bottom: "15%", // отрегулируй по своей картинке
          width: "20px",
          height: "20px"
        }}
      />

      {/* Затемнение кнопки */}
      <button
        disabled={!agreed}
        className={`absolute text-white font-bold rounded-md transition-opacity duration-300 ${
          agreed ? "bg-transparent" : "bg-black/60"
        }`}
        style={{
          left: "50%",
          bottom: "7%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "50px"
        }}
      >
        {/* Невидимый текст (для кликабельности) */}
        {agreed ? " " : " "}
      </button>
    </div>
  );
}
