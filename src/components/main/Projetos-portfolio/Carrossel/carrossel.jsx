import { useEffect } from "react";
import "./carrossel.css";

import Landtuzinho from "../../../../assets/arq/img/imagens-carrossel/landpage-tuzinho.png";
import OriginalArtista from "../../../../assets/arq/img/imagens-carrossel/artistas-original.png";
import Pokemon from "../../../../assets/arq/img/imagens-carrossel/pokemon.png";
import Github from "../../../../assets/arq/img/imagens-carrossel/projeto-github.png";
import Leitura from "../../../../assets/arq/img/imagens-carrossel/projeto-leitura.png";
import Mentoria from "../../../../assets/arq/img/imagens-carrossel/site-mentoria.png";
import OriginalSP from "../../../../assets/arq/img/imagens-carrossel/site-original.png";
import Workshop from "../../../../assets/arq/img/imagens-carrossel/site-workshop.png";

import ItemCarrossel from "./itemCarrossel/item-carrosel.jsx";
import CarrosselProjetos from "../../../../assets/arq/js/carrossel.js";

const ItensCarrossel = [
  {
    title: "Projeto Tuzinho",
    descriptionItem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    Image: Landtuzinho,
    urlGithub:'https://github.com/ygos-96/landpage-tuzinho.git',
    urlProjeto:'https://ygos-96.github.io/landpage-tuzinho/'
  },
  {
    title: "Original Artista",
    descriptionItem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    Image: OriginalArtista,
    urlGithub:'https://github.com/ygos-96/artista-original.git',
    urlProjeto:'https://ygos-96.github.io/artista-original/'
  },
  {
    title: "Pokemon",
    descriptionItem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    Image: Pokemon,
    urlGithub:'https://github.com/ygos-96/listagem-pokemon.git',
    urlProjeto:'https://ygos-96.github.io/listagem-pokemon/'
  },
  {
    title: "Github",
    descriptionItem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    Image: Github,
    urlGithub:'https://github.com/ygos-96/api-github.git',
    urlProjeto:'https://ygos-96.github.io/api-github/'
  },
  // {
  //   title: "Leitura",
  //   descriptionItem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
  //   Image: Leitura,
  //   urlGithub:'teste5.html',
  //   urlProjeto:'teste5.html'
  // },
  // {
  //   title: "Mentoria",
  //   descriptionItem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
  //   Image: Mentoria,
  //   urlGithub:'teste6.html',
  //   urlProjeto:'teste6.html'
  // },
  {
    title: "Original SP Tattoo",
    descriptionItem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    Image: OriginalSP,
    urlGithub:'https://github.com/ygos-96/original-sp-tattoo.git',
    urlProjeto:'https://ygos-96.github.io/original-sp-tattoo/'
  },
  {
    title: "WorkShop Predator",
    descriptionItem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
    Image: Workshop,
    urlGithub:'https://github.com/ygos-96/worshop-predator.git',
    urlProjeto:'https://ygos-96.github.io/worshop-predator/'
  }
];

const Carrossel = () => {
  useEffect(() => {
    CarrosselProjetos();
  }, []);

  return (
    <div className="carousel">
      <div className="list">
        {ItensCarrossel.map((item, index) => (
          <ItemCarrossel
            key={index}
            title={item.title}
            descriptionItem={item.descriptionItem}
            Image={item.Image}
            urlGithub={item.urlGithub}
            urlProjeto={item.urlProjeto}
          />
        ))}
      </div>

      <div className="arrows">
        <button className="prev">{"<"}</button>
        <button className="next">{">"}</button>
      </div>

    </div>
  );
};

export default Carrossel;
