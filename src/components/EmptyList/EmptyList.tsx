import React, { FC } from "react";
import { Props } from "./typing";
import './styles.scss';

const EmptyList: FC<Props> = ({ icon, description }) => {
  return (
    <div className="empty-list-wrapper">
      <img src={icon.src} alt={icon.alt} />
      <p>{description}</p>
    </div>
  );
};

export default EmptyList;
