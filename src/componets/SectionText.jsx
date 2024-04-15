import dividerMobile from "../images/pattern-divider-mobile.svg";
import dividerDesktop from "../images/pattern-divider-desktop.svg";
import icon from "../images/icon-dice.svg";
import { useState, useEffect } from "react";

const SectionText = () => {
  const [data, setData] = useState();
  const [id, setId] = useState();

  const randNum = Math.random() * 100;

  const fetchApi = (x) => {
    fetch(`https://api.adviceslip.com/advice/${x}`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data.slip.advice);
        setId(data.slip.id);
      })
      .catch((error) => {
        console.error("Hubo un problema con la solicitud fetch:", error);
      });
  };

  useEffect(() => {
    fetchApi(randNum);
  }, []);

  const handleAdvice = () => {
    fetchApi(randNum);
  };

  return (
    <>
      <article className="w-[342px] bg-DarkGrayishBlue rounded-xl px-[30px] pt-[10px] pb-16 my-20 mx-auto relative flex flex-col">
        <h2 className="text-NeonGreen uppercase mb-6 tracking-[4px] text-xs">
          Advice #<span>{id}</span>{" "}
        </h2>
        <p className="text-LightCyan mb-4">{data}</p>
        <img src={dividerMobile} alt="imgDivider" />
        <button
          className="w-[66px] bg-NeonGreen h-[66px] rounded-full grid place-content-center absolute bottom-[-33px] left-[139px] hover:drop-shadow-[0_0_16px_hsl(150,100%,60%)]"
          onClick={handleAdvice}
        >
          <img src={icon} alt="icon-button" />
        </button>
      </article>
    </>
  );
};

export default SectionText;
