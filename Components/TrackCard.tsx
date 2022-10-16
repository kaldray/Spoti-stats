import React from "react";
import Image from "next/image";
import logo from "../public/Spotify_Logo_RGB_Black.png";

import { TrackCardPros } from "types/Components";
import styles from "@styles/Components/TrackCard.module.scss";

const TrackCard = ({ items, i }: TrackCardPros) => {
  const {
    name,
    album: { images },
    artists,
  } = items;
  const { card__container, info__container, logo__container, cover__container } = styles;

  function goToSpotifyUrl() {
    window.location.href = items.external_urls.spotify;
  }

  return (
    <>
      {items && (
        <section className={card__container}>
          <div className={info__container}>
            <div className={cover__container}>
              <Image
                alt={"Pochette de " + name}
                loading="lazy"
                quality={"100"}
                layout="intrinsic"
                src={images[2].url}
                width={images[2].width}
                height={images[2].height}
              />
            </div>
            <ul>
              <li>
                {i} - {name}
              </li>
              <li>{artists[0].name}</li>
            </ul>
          </div>
          <div onClick={goToSpotifyUrl} className={logo__container}>
            <Image layout="intrinsic" alt="Spotify Logo" loading="lazy" quality={"100"} src={logo} />
          </div>
        </section>
      )}
    </>
  );
};

export default TrackCard;
