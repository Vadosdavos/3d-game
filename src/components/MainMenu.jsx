import { useState } from "react";
import "./MainMenu.css";

const MainMenu = ({ onStartGame }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="main-menu">
      {!showDescription ? (
        <div className="menu-buttons">
          <h1>3D Шутер</h1>
          <button type="button" onClick={onStartGame}>Начать игру</button>
          <button type="button" onClick={() => setShowDescription(true)}>Описание</button>
        </div>
      ) : (
        <div className="description">
          <h2>Описание игры</h2>
          <p>3D шутер от первого лица с элементами выживания.</p>
          <h3>Управление:</h3>
          <ul>
            <li>W, A, S, D - движение</li>
            <li>Пробел - прыжок</li>
            <li>Левая кнопка мыши - стрельба</li>
          </ul>
          <button type="button" onClick={() => setShowDescription(false)}>Назад</button>
        </div>
      )}
    </div>
  );
};

export default MainMenu;
