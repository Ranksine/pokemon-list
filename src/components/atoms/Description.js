import React from "react";

const Description =  ({
    height,
    weight,
    posbs1,
    posbs2,
    posbs3,
    posbs4,
    posbs5,
    posbs6,

}) => {
    return (
        <div className="desc">
            <p>Altura: <b>{height * 10}</b> cm.</p>
            <p>Peso: <b>{weight * 0.1}</b> kg.</p>
            <h3>Stats</h3>
            <p>HP: <b>{posbs1}</b></p>
            <p>Atk: <b>{posbs2}</b></p>
            <p>Def: <b>{posbs3}</b></p>
            <p>SPAtk: <b>{posbs4}</b></p>
            <p>SPDef: <b>{posbs5}</b></p>
            <p>Speed: <b>{posbs6}</b></p>
        </div>

    )
};

export default Description;