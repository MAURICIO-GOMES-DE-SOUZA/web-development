//! Contextos ,Explicação:

//todo (Context)
// * é uma funcionalidade que compartilha dados entre (componentes) que são funções, sem precisar passar dados explicitamente através das Props nos Níveis da árvore de componentes. É muito útil quando se tem vários componentes juntos, e quer mandar algum dado para outro componente que estão mais profundos na //*(hierarquia)

//todo (PropDriling)
//* refere-se a uma situação em que você precisa passar propriedades (props) através de vários níveis de componentes, mesmo que alguns desses componentes intermediários não usem essas props diretamente. 

//* sem ter que passar manualmente as props por todos os componentes intermediários

//todo/ import { createContext } from "react";

//!Importa a função 

//* UserContext, que representa a estrutura do objeto que será armazenado no contexto.

//* type UserContext = {
//     name: string;
//     setName: React.Dispatch<React.SetStateAction<string>>;
// }

//* Neste caso, ele possui uma propriedade name do tipo string e uma propriedade setName do tipo React.Dispatch<React.SetStateAction<string>>.

//todo/ export const UserContext = createContext({} as UserContext);

// Cria um contexto React usando a função createContext e o tipo UserContext.


import { createContext } from "react";

type UserContext = {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext({} as UserContext);