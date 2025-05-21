import { useNavigate } from "react-router-dom";

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen welcome">
      <h1>Добро пожаловать в Questory</h1>
      <button onClick={() => navigate('/rules')}>Начать</button>
    </div>
  );
}