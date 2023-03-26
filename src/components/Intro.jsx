import React from "react";

function Intro(){
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Emmanuel</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Trainee developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                Soy estudiante de programación y sistemas en UTN-FRA. 
                Me considero una persona proactiva y con incentivo. 
                Aspiro al desarrollo en un marco laboral competitivo, 
                donde el trabajo en equipo y el aprendizaje sean continuos, 
                constantes y recíprocos. 
                Cuento con la intención 
                y motivación en pos de un constante crecimiento personal y laboral.
            </p>
        </div>
    )
}

export default Intro;