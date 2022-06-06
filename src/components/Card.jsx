import React, { useState } from "react";

function Card({ card }) {
  const cardStyle = { backgroundImage: `url(${card.url})` };

  const [cardId, setCardId] = useState("");
  const [listId, setListId] = useState([]);

  const onClick = () => {
    setCardId(card.id);
    success(cardId, listId);
  };

  const success = (id, listId) => {
    setListId(() => {
      return [...listId, id];
    });
  };

  // useEffect(() => {
  //   success(listId);
  // }, [listId]);
  //localStorage.setItem("saveId", JSON.stringify(_saveId));
  //const saveIdInLocal = JSON.parse(localStorage.getItem("saveId"));

  // const isLike = () => {
  //   //setId(card.id);
  //   addCardInFavorite(card.id);
  // };

  // const addCardInFavorite = (id) => {
  //   let we = [];
  //   const isLiked = saveId.includes(id);
  //   console.log(isLiked);
  //   console.log(id);
  //   if (!isLiked) {
  //     saveIdInLocal.push(id);
  //     //setSaveId((state) => state.filter((c) => c !== id));
  //     setSaveId((state) => {
  //       return [...state, id];
  //     });
  //   } else {
  //     //setSaveId((state) => [...state, id]);

  //     console.log(we);
  //   }
  // };

  // const addCardInFavorite = () => {
  //   const rememberMe = localStorage.getItem("id");
  //   const sd = card.id;
  //   if (rememberMe.length > 0) {
  //     //setId([...id, card.id]);
  //     // const newArray = [...id, sd];
  //     // console.log(saveId);
  //     // //let copy = Object.assign([], id);
  //     // //copy.push(card.id);
  //     // setId(newArray);
  //     // console.log(id);
  //   }
  // };
  // console.log(listId);
  //console.log(_saveId);
  //console.log(saveIdInLocal);

  return (
    <li className='card'>
      <div className='card__image' style={cardStyle}>
        <button
          className='card__button card__button-is-active'
          type='button'
          onClick={onClick}></button>
      </div>
    </li>
  );
}

export default Card;
