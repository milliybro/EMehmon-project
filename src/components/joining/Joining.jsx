import { Button } from "@mui/material";
import "./Joining.scss"

const Joining = () => {
  return (
    <section id="joining">
      <div className="container">
        <div className="joining-card">
          <div className="joining-card__text">
            <h2>Добро пожаловать в нашу семью арендодателей!</h2>
            <p>
              Присоединяйтесь к нашей платформе и делайте свое жилье доступным
              для туристов. Создайте сотрудничество как в Airbnb и начните
              приключение без слов, станьте частью нашей гостеприимной семьи.
            </p>
            <Button>Присоединиться</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Joining;
