import welcomeBg from "../assets/images/welcome.jpg";

export default function WelcomeScreen() {
  const handleStart = () => {
    window.location.href = "/menu"; // или navigate("/menu") если используешь React Router
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={welcomeBg}
        alt="Questory Welcome"
        className="w-full h-full object-cover"
      />

      {/* Прозрачная зона-кнопка поверх встроенной кнопки */}
      <div
        onClick={handleStart}
        className="absolute"
        style={{
          bottom: "80px", // отступ от низа
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "60px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
