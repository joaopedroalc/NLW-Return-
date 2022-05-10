import CloseButton from "./CloseButton";

import bugImageURL from "../assets/bug.svg"; 
import ideaImageURL from "../assets/idea.svg"; 
import otherImageURL from "../assets/other.svg"; 

const feedbackTypes= {
  BUG: {
    title: "Problema",
    image: {
      source:bugImageURL,
      alt: "Imagem de um inseto"
    }
  },
  IDEA:{
    title: "Ideia",
    image: {
      source:ideaImageURL,
      alt: "Imagem de uma lâmpada"
    }
  },
  OTHER:{
    title: "Outro",
    image: {
      source:otherImageURL,
      alt: "Imagem de um balão de pensamento"
    }
  }
}

export default function WidgetForm(){
  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <CloseButton />
        <span className="text-xl leading-6">Deixe seu feedback</span>
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          console.log(key, value);
          return null;
        })}
      </div>

      <footer className="text-xs text-neutral-400 ">
        Feito com 💙 por <a className="underline underline-offset-2" href="https://joaopedrocode.netlify.app">Pepeto</a>
      </footer>
    </div>
  )
}