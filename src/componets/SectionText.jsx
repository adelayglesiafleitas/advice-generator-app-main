import { useState, useEffect } from "react";
import dividerMobile from "../images/pattern-divider-mobile.svg";
import icon from "../images/icon-dice.svg";

const SectionText = () => {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);

  const fetchAdvice = (x) => {
    fetch(`https://api.adviceslip.com/advice/${x}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result.slip.advice);
        setId(result.slip.id);
      })
      .catch((error) => {
        console.error("Hubo un problema con la solicitud fetch:", error);
      });
  };

  useEffect(() => {
    const randNum = Math.floor(Math.random() * 100);
    fetchAdvice(randNum);
  }, []);

  const handleAdvice = () => {
    const randNum = Math.floor(Math.random() * 100);
    fetchAdvice(randNum);
  };

  return (
    <article className="w-[342px] bg-DarkGrayishBlue rounded-xl px-[30px] pt-[10px] pb-16 my-20 mx-auto relative flex flex-col">
      <h2 className="text-NeonGreen uppercase mb-6 tracking-[4px] text-xs md:w-[540px]">
        Advice #{id}
      </h2>
      <p className="text-LightCyan mb-4">{data}</p>
      <img src={dividerMobile} alt="imgDivider" />
      <button
        className="w-[66px] bg-NeonGreen h-[66px] rounded-full grid place-content-center absolute bottom-[-33px] left-[139px] hover:drop-shadow-[0 0 16px hsl(150,100%,60%)]"
        onClick={handleAdvice}
      >
        <img src={icon} alt="icon-button" />
      </button>
    </article>
  );
};

export default SectionText;