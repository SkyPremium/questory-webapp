import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loadingImage from "@/books/tutorial/images/loading.png";

const phrases = [
  "Совет: внимательно осматривай окружение...",
  "Помни: не всё то выход, что кажется дверью.",
  "Используй предметы в нужный момент — и они спасут тебе жизнь.",
  "Некоторые решения ведут к неожиданным последствиям..."
];

export default function BookLoadingScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setPhrase(randomPhrase);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate("/books/tutorial/scenes/scene01"), 500);
        }
        return Math.min(prev + 2, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div
      style={{
        backgroundImage: `url(${loadingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: "80px"
      }}
    >
      <div
        style={{
          width: "60%",
          height: "20px",
          backgroundColor: "#000",
          border: "2px solid #a36b1d",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "12px"
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#f5c56d",
            transition: "width 0.3s ease"
          }}
        />
      </div>
      <div
        style={{
          color: "#d9a45c",
          fontSize: "14px",
          textAlign: "center",
          maxWidth: "80%",
          lineHeight: "1.4"
        }}
      >
        {phrase}
      </div>
    </div>
  );
}